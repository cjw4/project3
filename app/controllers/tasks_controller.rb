class TasksController < ApplicationController
  before_filter :authenticate_user!
  def index
    @tasks = current_user.tasks.all
  end
  
  def create
    @task = current_user.tasks.create!({ :content => params["content"] })
    
    respond_to do |format|
      format.json { render :json => @task}
    end
  end
  
  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
  end

end
