var QueueView = Backbone.View.extend({

  template: _.template('<div class="singleQueue text-center"><%-name%></div>'),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function(){
    var queueItem = this.template({
      name: this.model.get('name')
    });
    this.$el.html(queueItem);
    this.$el.appendTo('#list-view');
  }

});