var Queues = Backbone.Collection.extend({
  
  model: Queue,

  addQueueItem: function(name){
    this.add({
      name: name
    });
  }

});