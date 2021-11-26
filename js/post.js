/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = 'https://blogging-appp.herokuapp.com/api/posts/';
const API_BASE_URL = 'https://blogging-appp.herokuapp.com/';

window.onload = () => {
  getPost();
};

const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
};

// /api/posts/:post_id
const getPost = () => {
  const postId = getPostIdParam();
  const route = `${API_URL}${postId}`;
  // CODE GOES HERE
  fetch(route, {
    method: 'Get',
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      buildPost(data);
    });
};

const buildPost = data => {
  // HINT: Convert the date number to a Date string
  const postImage = `${API_BASE_URL}${data.post_image}`;
  document.querySelector('header').style.backgroundImage = `url(${postImage})`;
  document.getElementById('individual-post-title').innerText = data.title;
  const date = new Date(parseInt(data.added_date, 10)).toDateString();
  document.getElementById(
    'individual-post-date'
  ).innerText = `Published on ${date}`;
  document.getElementById('individual-post-content').innerText = data.content;
};
