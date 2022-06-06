const blogsList = document.getElementById('display-approve-blogsList');
let allBlogs = [];

const remove = async(id) => {
    try {
        const res = await fetch('http://localhost:3001/blogs/delete/' + id, {
            method: 'DELETE'
        });
        location.reload();
    } catch (err) {
        console.error(err);
    }
};

const loadBlogs = async() => {
    try {
        const res = await fetch('http://localhost:3001/blogs/getAll/');
        allBlogs = await res.json();
        displayBlogs(allBlogs);
    } catch (err) {
        console.error(err);
    }
};

const displayBlogs = (blogs) => {
    const htmlString = blogs
        .map((blog) => {
            return `
        <tr>
            <td>${blog.createdAt.substr(8, 2)}/${blog.createdAt.substr(5, 2)}/${blog.createdAt.substr(2, 2)}</td>
            <td>${blog.header}</td>
            <td>
                <button class="pd-setting">Yayınlandı</button>
            </td>
            <td>
                <button data-toggle="tooltip" title="Düzenle" class="pd-setting-ed"><a href="blog-edit.html?blogId=${blog.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></button>
                <button data-toggle="tooltip" title="Sil" class="pd-setting-ed" onclick="remove(${blog.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
        </tr>
        `;
        })
        .join('');
    blogsList.innerHTML = htmlString;
}

loadBlogs();
