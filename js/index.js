const API_URL = 'https://blogging-appp.herokuapp.com/api/posts';
const API_BASE_URL = 'https://blogging-appp.herokuapp.com/';

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: 'Get',
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      buildPosts(data);
    });
};

const buildPosts = blogPosts => {
  let blogPostsContent = '';
  for (blogPost of blogPosts) {
    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    const postDate = new Date(parseInt(blogPost.added_date, 10)).toDateString();
    const postLink = `post.html?id=${blogPost.id}`;
    blogPostsContent += `
      <a class="post-link" href="${postLink}">
        <div class="post">
            <div class="post-image" style="background-image: url(${postImage})"></div>
            <div class="post-content">
                <div class="post-date">${postDate}</div>
                <div class="post-title"> <h4>${blogPost.title}</h4></div>
                <div class="post-text">${blogPost.content}</div>
            </div>
        </div>
      </a>
      `;
  }
  document.querySelector('.blog-posts').innerHTML = blogPostsContent;
};
