import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('settings');
  this.route('blogs', function() {
    this.route('blog', {
      path: '/:id'
    });
  });
});

export default Router;
