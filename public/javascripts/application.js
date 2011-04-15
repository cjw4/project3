$(document).ready(function() {
	$("#tasksContainer").load("partial/tasks");
	
	$("#txtTask").bind("keydown", function(e) {
		if (e.keyCode == "13") addTask();
	});
	
	$("#addTask").live("click", addTask);
	
	$(".deleteBtn").live("click", function(){
		var item = $(this);
		var taskId = item.attr("id");

		$.ajax({
			type:'delete',
			url:'tasks/' + taskId,
			success: function() {
				$("#tasksContainer").load("partial/tasks")
				// item.parent().remove();
			}
		});
	});
	
});

function addTask() {
	var taskContent = $("#txtTask").val();
	$("img").css({'display':"inline"});
	
	$.post('tasks.json', { content: taskContent }, function(data) {
		$("#tasksContainer").load("partial/tasks");
		/* var taskId = data.task.id;
		var newTask = $("<li>").text(taskContent);
		var deleteBtn = $("<input>").attr({type:'button', value:'delete', class:'deleteBtn', id:taskId});
		deleteBtn.appendTo(newTask);
		newTask.appendTo($("ul")); */
		$("img").css({'display':"none"});
	});
	
	$("#txtTask").val("");
}


