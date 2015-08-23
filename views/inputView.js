var InputView = Backbone.View.extend({

  tagName: 'input',

  events: {
    'keydown': 'addItem'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.reset();
    return this;
  },

  addItem: function(e){
    if(e.which === 13){
      this.collection.add({
        name: this.$el.val()
      });
      this.reset();
    }
  },

  reset: function(){
    this.$el.attr({
      placeHolder: 'Name your new queue item'
    });
    this.$el.val('');
  }
});