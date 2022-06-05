const sendHttpRequest = (method, url, data) => {
    console.log("girdi2");
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

const saveData = () => {
    console.log("girdi1");
    sendHttpRequest('POST', 'http://localhost:3001/announcements/create', {

        header: $('#ann-header').val(),
        content: $($('.summernote1').summernote('code')).text()

    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

var save = function() {
    saveData();
    $('#successful').show();
    $('#default').hide();
};