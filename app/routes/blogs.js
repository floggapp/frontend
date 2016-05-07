import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
      const id = params.id;
      const following = this.get('following');
      return following.find(id);
    },

    following: Ember.inject.service()

});
