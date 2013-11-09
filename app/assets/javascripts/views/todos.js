TodoApp.Views.TodoListView = Backbone.View.extend({
    template: JST["templates/todo"],
    addOne: function(todoItem){
        var todoView = new TodoApp.Views.TodoView({model: todoItem});
        console.log(todoView.render());
        this.$el.append(todoView.render().el);
    },
    render: function(){
        this.collection.each(this.addOne,this);
        return this;
    }
})