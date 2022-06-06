const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('blogId');
const blog_api_url = 'http://localhost:3001/blogs/getOne/' + blogId;

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
        };

        xhr.onerror = () => {
            reject('Bir hata oldu!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'http://localhost:3001/blogs/getAll').then(responseData => {
        console.log(responseData);
    });
};

const approveBlog = () => {
    sendHttpRequest('PUT', 'http://localhost:3001/blogs/update/' + blogId, {


        status: 'approved'

    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

const rejectBlog = () => {
    sendHttpRequest('PUT', 'http://localhost:3001/blogs/update/' + blogId, {

        status: 'rejected'

    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};


async function getSingleBlog() {
    try {
        const response = await fetch(blog_api_url);
        const data = await response.json();
        const {
            header,
            content
        } = data;
        document.getElementById("gosterilen").textContent = data.header;
        document.getElementById("girilen").defaultValue = data.header;
        document.getElementById("gosterilen-div").innerHTML = `<p>${data.content}</p>`;
        document.getElementById("girilen-text").defaultValue = data.content;
    } catch (error) {
        console.log(error);
    }
}



var approve = function() {
    console.log("Approved");
    approveBlog();
    location.assign('blog-approve.html');
};

var reject = function() {
    console.log("Rejected");
    rejectBlog();
    location.assign('blog-approve.html');
};

getSingleBlog();