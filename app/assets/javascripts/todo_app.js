window.TodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
      var todos = new TodoApp.Collections.Todos(data.todos);
      new TodoApp.Routers.TodoRouter({todos: todos});
      Backbone.history.start();
  }
};

//$(document).ready(function(){
//  TodoApp.initialize();
//});

