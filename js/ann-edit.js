const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const announcementId = urlParams.get('announcementId');
const announcement_api_url = 'http://localhost:3001/announcements/getOne/' + announcementId;

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
    sendHttpRequest('GET', 'http://localhost:3001/announcements/getAll').then(responseData => {
        console.log(responseData);
    });
};

const updateData = () => {
    sendHttpRequest('PUT', 'http://localhost:3001/announcements/update/' + announcementId, {

        header: $('#girilen').val(),
        content: $($('.click2edit').summernote('code')).text()

    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};


async function getSingleAnnouncement() {
    try {
        const response = await fetch(announcement_api_url);
        const data = await response.json();
        const {
            header,
            content
        } = data;
        document.getElementById("gosterilen").textContent = data.header;
        document.getElementById("girilen").placeholder = data.header;
        document.getElementById("gosterilen-div").innerHTML = `<p>${data.content}</p>`;
    } catch (error) {
        console.log(error);
    }
}



var edit = function() {
    $('#girilen').show();
    $('#gosterilen').hide();
    $('#gosterilen-div').hide();
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

getSingleAnnouncement();