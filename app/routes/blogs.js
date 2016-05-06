import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
      const id = params.id;
      const blog = this.get('blog');
      return blog.find(id);
    },

    blog: Ember.inject.service()

});
