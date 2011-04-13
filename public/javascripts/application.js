$(document).ready(function() {
	$("#txtTask").bind("keydown", function(e) {
		if (e.keyCode == "13") addTask();
	});
	
	$("#addTask").click(addTask);
	
	$(".deleteBtn").live("click", function(){
		var item = $(this);
		var taskId = item.attr("id");

		$.ajax({
			type:'delete',
			url:'tasks/' + taskId,
			success: function() {
				item.parent().remove();
			}
		});
	});
});

function addTask() {
	var taskContent = $("#txtTask").val();
	$("img").css({'display':"inline"});
	
	$.post('tasks.json', { content: taskContent }, function(data) {
		var taskId = data.task.id;
		var newTask = $("<li>").text(taskContent);
		var deleteBtn = $("<input>").attr({type:'button', value:'delete', class:'deleteBtn', id:taskId});
		deleteBtn.appendTo(newTask);
		newTask.appendTo($("ul"));
		$("img").css({'display':"none"});
	});
	
	$("#txtTask").val("");
}


