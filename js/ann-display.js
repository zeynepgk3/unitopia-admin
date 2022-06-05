const input = document.querySelector('input');
const baslik = document.getElementById('baslikedit');
const gosterilen = async() => {
    try {
        const ann_id = 'http://localhost:3001/announcement/getOne/' + announcementId.toString();
        const res = await fetch(ann_id);
        console.log(res);
        announcement = await res.json();
        displayCharacters(announcement);
    } catch (err) {
        console.error(err);
    }
};