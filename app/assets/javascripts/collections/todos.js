TodoApp.Collections.Todos = Backbone.Collection.extend({
    model: TodoApp.Models.Todo,
    url: '/todos'
})