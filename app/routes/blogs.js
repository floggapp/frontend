import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
      return this.get('store').getFollowingById(params.id);
    },

    store: Ember.inject.service()

});
