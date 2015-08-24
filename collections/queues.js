var Queues = Backbone.Collection.extend({
  
  model: Queue,

  addQueueItem: function(name){
    this.add({
      name: name
    });
  },

  removeQueueItem: function(model){
    var found = this.get(model);
    this.remove(found);
  }

});