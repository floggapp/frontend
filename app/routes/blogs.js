import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
      const id = params.id;
      const following = this.get('store').getFollowings();
      return following.find(id);
    },

    store: Ember.inject.service()

});
