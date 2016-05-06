import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      const blogs = this.get('blog');
      return blogs.all();
    },

    blog: Ember.inject.service()

});
