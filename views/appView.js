var AppView = Backbone.View.extend({

  el: '#main-container',
  
  initialize: function(){
    this.title = _.template('<div class="container"><h2>Backbone Queue Visualization</h2></div>');
    
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
      this.input, 
      this.queueList
    ]);
    return this;
  }

});