import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return {
        blogs: this.get('store').getBlogs(),
        followings: this.get('store').getFollowings()
      };
    },

    store: Ember.inject.service(),

});
