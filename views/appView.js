var AppView = Backbone.View.extend({

  el: '#main-container',
  
  initialize: function(){
    this.title = _.template('<h2 class="text-center">Queue Visualization using Backbone.js</h2>');
    
    this.input = new InputView({
      collection: this.collection
    });

    this.queueList = new QueueListView({
      collection: this.collection
    }); 
    this.render();
  },

  render: function(){

    this.$el.append([
      this.title, 
      this.input.$el, 
      this.queueList.$el
    ]);
    return this; 
  }

});