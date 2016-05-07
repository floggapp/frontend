import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      const followings = this.get('following');
      const blogs = this.get('blog');

      return {
        blogs: blogs.all(),
        followings: followings.all()
      };

    },

    following: Ember.inject.service(),
    blog: Ember.inject.service()

});
