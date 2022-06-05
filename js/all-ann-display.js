const announcementsList = document.getElementById('announcementsList');
let allAnnouncements = [];

const loadAnnouncements = async() => {
    console.log('girdi');
    try {
        const res = await fetch('http://localhost:3001/announcements/getAll');
        console.log(res);
        allAnnouncements = await res.json();
        displayAnnouncements(allAnnouncements);
    } catch (err) {
        console.error(err);
    }
};

const displayAnnouncements = (announcements) => {
    const htmlString = announcements
        .map((announcement) => {
            return `
            
            <tr>
            <td>${announcement.createdAt.substr(8, 2)}/${announcement.createdAt.substr(5, 2)}/${announcement.createdAt.substr(2, 2)}</td>
            <td>${announcement.header}</td>
            <td>
                <button data-toggle="tooltip" title="Düzenle" class="pd-setting-ed"><a href="announcement-edit.html?announcementId=${announcement.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></button>
                <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
            </tr>
        `;
        })
        .join('');
    announcementsList.innerHTML = htmlString;
};

loadAnnouncements();