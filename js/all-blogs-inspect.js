const blogsList = document.getElementById('display-approve-blogsList');
let allBlogs = [];

const remove = async (id) => {
  try {
    const res = await fetch('http://localhost:3001/blogs/delete/' + id, {
      method: 'DELETE'
    });
    location.reload();
  } catch (err) {
    console.error(err);
  }
};

// const approveBlog = () => {
//   sendHttpRequest('PUT', 'http://localhost:3001/blogs/update/' + blogId, {
//
//
//     status: 'approved'
//
//   }).then(responseData => {
//     console.log(responseData);
//   }).catch(err => {
//     console.log(err);
//   });
// };
//
// const rejectBlog = () => {
//   sendHttpRequest('PUT', 'http://localhost:3001/blogs/update/' + blogId, {
//
//     status: 'rejected'
//
//   }).then(responseData => {
//     console.log(responseData);
//   }).catch(err => {
//     console.log(err);
//   });
// };

const loadBlogs = async () => {
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
                <button data-toggle="tooltip" title="Incele" class="pd-setting-ed"><a href="blog-inspect.html?blogId=${blog.id}"><i class="fa fa-eye" aria-hidden="true"></i></a></button>
                <button data-toggle="tooltip" title="Sil" class="pd-setting-ed" onclick="remove(${blog.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
        </tr>
        `;
    })
    .join('');
  blogsList.innerHTML = htmlString;
}

// var approve = function() {
//   console.log("Approved");
//   approveData();
// };
//
// var reject = function() {
//   console.log("Rejected");
//   rejectData();
// };
loadBlogs();
