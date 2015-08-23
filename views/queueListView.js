var QueueListView = Backbone.View.extend({

  id: 'list-view',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function(){

    this.$el.empty();

    this.queueItems = this.collection.models.map(function(model){
      return new QueueView({
        model: model
      })
    });

    var $els = this.queueItems.map(function(item){
      item.$el;
    });
    this.$el.append($els);
    return this;
  }
});