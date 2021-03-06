var RemoveView = Backbone.View.extend({

  tagName: 'button',
  id: 'remove',

  events: {
    'click': 'removeItem'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html('Remove from Queue');
    return this;
  },

  removeItem: function(){
    console.log(this.collection.models[0].attributes.name);
    this.collection.removeQueueItem(this.collection.models[0]);
  }
});