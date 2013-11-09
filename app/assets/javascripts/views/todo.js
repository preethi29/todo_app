TodoApp.Views.TodoView = Backbone.View.extend({
    tagName: 'li',
//    template: _.template('<h3><%= title %></h3>'),
    template: JST["templates/todo"],

    initialize: function(){

    },
    render: function(){
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;
    }
})