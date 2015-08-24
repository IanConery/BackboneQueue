var InputView = Backbone.View.extend({

  tagName: 'input',
  id: 'input',
  className: 'text-center',

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

      this.collection.addQueueItem(this.$el.val());
      this.reset();
    }
  },

  reset: function(){
    this.$el.attr({
      placeHolder: 'Add to the Queue'
    });
    this.$el.val('');
  }
});