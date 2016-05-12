import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return this.get('store').getBookmarkeds();
    },

    store: Ember.inject.service()



});
