import Ember from 'ember';

export default Ember.Service.extend({

  all() {
      return [{
        id: 1,
        name: 'Mete Kabak',
        link: 'metekabak.me',
        image: 'https://pbs.twimg.com/profile_images/645727518889082880/y2j8bSDy_400x400.jpg',
        unreaded: 2
      }, {
        id: 2,
        name: 'Mert Kasar',
        link: 'mertkasar.me',
        image: 'https://pbs.twimg.com/profile_images/593460596437188608/-Ert1f8B_400x400.jpg',
        unreaded: 4
      }, {
        id: 3,
        name: 'Ahmet Varis',
        link: 'ahmetvaris.me',
        image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c114.30.376.376/s50x50/246946_2079749796236_3026877_n.jpg?oh=5e34a280184c4e1d1593a0059fe8b481&oe=57A2D4C1',
        unreaded: 6
      }];
    },

    find(id) {
      const blogs = this.all();
      return blogs.findBy('id', id);
    }


});
