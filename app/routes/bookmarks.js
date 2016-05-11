import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      const posts = this.get('post');
      return posts.bookmarkeds();
    },

    post: Ember.inject.service()



});
