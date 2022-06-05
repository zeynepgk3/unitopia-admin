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

const getData = () => {

    sendHttpRequest('GET', 'http://localhost:3001/announcements/getAll').then(responseData => {
        console.log(responseData);
    });

};

const updateData = () => {
    sendHttpRequest('PUT', 'http://localhost:3001/announcements/update/', {

        header: "teseettiir@test.com",
        content: "Emrrete Test2"

    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

var edit = function() {
    $('#girilen').show();
    $('#gosterilen').hide();
    $('.click2edit').summernote({ focus: true });
};

var save = function() {
    var girilen = $('#girilen').val();
    $('#gosterilen').text(girilen);
    $('#girilen').hide();
    $('#gosterilen').show();
    var markup = $('.click2edit').summernote('code');
    $('.click2edit').summernote('destroy');

    updateData();
};