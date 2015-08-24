var QueueView = Backbone.View.extend({

  template: _.template('<p><%-name%></p>'),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function(){
    var queueItem = this.template({
      name: this.model.get('name')
    });
    
    this.$el.html(queueItem);
    return this;
  }

});