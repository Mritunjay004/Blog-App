const { response } = require('express');
const fs = require('fs');
const PATH = './data.json';

class Post {
  get() {
    // get posts
    return this.readData();
  }

  getIndividualBlog(id) {
    // get one blog post
    let posts = this.readData();
    let foundPost = posts.find(post => post.id == id);
    return foundPost;
  }

  add(newPost) {
    // add new post
    let currentPosts = this.readData();
    currentPosts.unshift(newPost);
    this.storeData(currentPosts);
  }

  readData() {
    let rawData = fs.readFileSync(PATH);
    let posts = JSON.parse(rawData);
    return posts;
  }

  storeData(rawData) {
    let data = JSON.stringify(rawData);
    fs.writeFileSync(PATH, data);
  }
}

module.exports = Post;
