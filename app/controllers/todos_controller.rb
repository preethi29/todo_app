class TodosController < ApplicationController
  respond_to :json, :html
  def index
   respond_with(@todos = Todo.all)
  end

  def show
    respond_to do |format|
      format.json {Todo.find(id: params[:id])}
    end
  end
end
