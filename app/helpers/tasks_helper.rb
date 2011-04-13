module TasksHelper
  def title
    if user_signed_in?
      @title = "Tasks | #{current_user.email}"
    else
      @title = 'ToDo List App'
    end
  end
end
