import Ember from 'ember';

export default Ember.Service.extend({

  all() {
      return [{
        id: 1,
        name: 'Mete Kabak',
        link: 'metekabak.me',
        unreaded: 2
      }, {
        id: 2,
        name: 'Mert Kasar',
        link: 'mertkasar.me',
        unreaded: 4
      }, {
        id: 3,
        name: 'Ahmet Varis',
        link: 'ahmetvaris.me',
        unreaded: 6
      }];
    },

    find(id) {
      const blogs = this.all();
      return blogs.findBy('id', id);
    }


});
