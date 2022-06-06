const registerbtn = document.getElementById('registerbtn');
const loginbtn = document.getElementById('loginbtn');
var loggedUser;

console.log(registerbtn);
const form = document.getElementById('registerForm');


const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
            // const data = JSON.parse(xhr.response);
            // console.log(data);
        };

        xhr.onerror = () => {
            reject('Bir hata oldu!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

// const getUser = (email) => {
//   console.log('email',email);
//   fetch('http://localhost:3001/users/getOneByEmail', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       email: email,
//     })
//   }).then(response => {
//     console.log("responseeeeee");
//     console.log(response);
//     console.log("response222");
//     console.log(response.json());
//     loggedUser=response.json();
//     console.log("loggedUser", loggedUser);
//   });
//   // location.assign('/index.html');
// };

const login = async() => {
    const form = document.querySelector('form');
    console.log('formEmail', form.email.value);
    console.log('formPassword', form.password.value);

    const data = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value
        })
    });
    console.log("data: ", data);

    loggedUser = await data.json();
    console.log("loggedUser: ", loggedUser);

    localStorage.setItem("name", loggedUser.name);
    localStorage.setItem("role", loggedUser.role);
    localStorage.setItem("email", loggedUser.email);
    localStorage.setItem("id", loggedUser.id);

    localStorage.getItem("name");

    // document.getElementByClassName("admin-name").textContent = "Emre";

    location.assign('index.html');
    console.log(localStorage.getItem("name"));
    console.log("bruh");
};
const logout = () => {
    localStorage.setItem("name", null);
    localStorage.setItem("role", null);
    localStorage.setItem("email", null);

    localStorage.getItem("name");
    // location.assign('/index.html');
};

const register = () => {
    const form = document.querySelector('form');
    console.log('formName', form.name.value);
    console.log('formEmail', form.email.value);
    console.log('formEmail', form.password.value);

    sendHttpRequest('POST', 'http://localhost:3001/users/signup', {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value, //sadece sayı olunca işe yaramıyor..
    }).then(responseData => {
        console.log("response data: ", responseData);
    }).catch(err => {
        console.log(err);
    });
    location.assign('login.html');
};

// const login = () => {
//   const form = document.querySelector('form');
//   console.log('formEmail', form.email.value);
//   console.log('formPassword', form.password.value);

//   sendHttpRequest('GET', 'http://localhost:3001/users/login', {
//     email: form.email.value,
//     password: form.password.value
//   }).then(responseData => {
//     console.log("response data: ",responseData);
//   }).catch(err => {
//     console.log("error : ", err);
//   });
// };

if (registerbtn) {
    registerbtn.addEventListener("click", register);
}
if (loginbtn) {
    loginbtn.addEventListener("click", login);
}