import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  mainMap: service(),

  actions: {
    didTransition() {
      this.get('mainMap')
        .setProperties({
          selected: null,
          shouldFitBounds: false,
        });
    },
  },
});
