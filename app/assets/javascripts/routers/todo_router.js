TodoApp.Routers.TodoRouter = Backbone.Router.extend({
    routes:{
        "": "index"
    },
    initialize: function(options){
      this.todos = options.todos;
    },
    index: function() {
        var view = new TodoApp.Views.TodoListView({ collection: this.todos });
        $('body').html(view.render().el);
    }

})