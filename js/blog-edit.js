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

const updateData = () => {
    sendHttpRequest('PUT', 'http://localhost:3001/blogs/update/' + blogId, {

        header: $('#girilen').val(),
        content: $('#girilen-text').val()

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



var edit = function() {
    $('#girilen').show();
    $('#gosterilen').hide();
    $('#gosterilen-div').hide();
    $('#girilen-text').show();
};

var save = function() {
    var girilen = $('#girilen').val();
    $('#gosterilen').text(girilen);
    $('#girilen').hide();
    $('#gosterilen').show();
    var girilentext = $('#girilen-text').val();
    $('#gosterilen-div').text(girilentext);
    $('#girilen-text').hide();
    $('#gosterilen-div').show();


    updateData();
};

getSingleBlog();