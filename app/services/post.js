import Ember from 'ember';

export default Ember.Service.extend({

  all() {
      return [{
        id: 1,
        blog_id: 1,
        blog: {
          name: 'Mete Kabak',
          title: 'Full-Stack Developer',
          image: 'https://pbs.twimg.com/profile_images/645727518889082880/y2j8bSDy_400x400.jpg'
        },
        favorited: true,
        link: 'http://metekabak.me/blog/rails-angular/before-we-start-angularjs-with-rails/',
        new: true,
        header: 'Before we start, rails with angularjs',
        summary: 'This is going to be blog series, We are going to make an application for home. We will cover these topics accordingly using rails,'
      }, {
        id: 2,
        blog_id: 1,
        blog: {
          name: 'Mete Kabak',
          title: 'Full-Stack Developer',
          image: 'https://pbs.twimg.com/profile_images/645727518889082880/y2j8bSDy_400x400.jpg'
        },
        favorited: false,
        link: 'http://metekabak.me/blog/rails-angular/creating-api-with-rails-api-gem/',
        new: true,
        header: '1. Creating api with rails-api gem',
        summary: 'Welcome to first part of our series, I’m going to show you the rails-api gem. Which is merged into rails, you can use it when rails 5 is published.(or beta now) From original repo,'
      }, {
        id: 3,
        blog_id: 2,
        blog: {
          name: 'Mert Kasar',
          title: 'Game Developer',
          image: 'https://pbs.twimg.com/profile_images/593460596437188608/-Ert1f8B_400x400.jpg'
        },
        favorited: true,
        link: 'http://metekabak.me/blog/rails-angular/before-we-start-angularjs-with-rails/',
        new: false,
        header: 'Before we start, rails with angularjs',
        summary: 'This is going to be blog series, We are going to make an application for home. We will cover these topics accordingly using rails,'
      }, {
        id: 4,
        blog_id: 2,
        blog: {
          name: 'Mert Kasar',
          title: 'Game Developer',
          image: 'https://pbs.twimg.com/profile_images/593460596437188608/-Ert1f8B_400x400.jpg'
        },
        favorited: true,
        link: 'http://metekabak.me/blog/rails-angular/before-we-start-angularjs-with-rails/',
        new: false,
        header: 'Before we start, rails with angularjs',
        summary: 'This is going to be blog series, We are going to make an application for home. We will cover these topics accordingly using rails,'
      }];
    },

    find(id) {
      const posts = this.all();
      return posts.findBy('id', id);
    },

    bookmarkeds() {
      const posts = this.all();
      return posts;
    }


});
