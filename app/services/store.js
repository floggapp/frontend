import Ember from 'ember';

import Post from 'frontend/models/post';
import Blog from 'frontend/models/blog';

const blogs = [
  Blog.create({
    id: 1,
    blogger: 'Mete Kabak',
    link: 'metekabak.me',
    image: 'https://pbs.twimg.com/profile_images/645727518889082880/y2j8bSDy_400x400.jpg',
    unreaded: 2
  }),
  Blog.create({
    id: 2,
    blogger: 'Mert Kasar',
    link: 'mertkasar.me',
    image: 'https://pbs.twimg.com/profile_images/593460596437188608/-Ert1f8B_400x400.jpg',
    unreaded: 6
  })
];

const posts = [
  Post.create({
    blog: blogs[0],
    favorited: true,
    link: 'http://metekabak.me/blog/rails-angular/before-we-start-angularjs-with-rails/',
    new: true,
    header: 'Before we start, rails with angularjs',
    summary: 'This is going to be blog series, We are going to make an application for home. We will cover these topics accordingly using rails,'
  }),
  Post.create({
    blog: blogs[1],
    favorited: false,
    link: 'http://metekabak.me/blog/rails-angular/creating-api-with-rails-api-gem/',
    new: true,
    header: '1. Creating api with rails-api gem',
    summary: 'Welcome to first part of our series, I’m going to show you the rails-api gem. Which is merged into rails, you can use it when rails 5 is published.(or beta now) From original repo,'
  })
];

export default Ember.Service.extend({



  getPosts() {
      return posts;
    },
    getProduct(id) {
      return posts.findBy('id', id);
    },
    getBookmarkeds() {
      return posts;
    },
    getBlogs() {
      return blogs;
    },
    getFollowings() {
      return blogs;
    }

});
