$('#newWeeklyButton').click(function(){
	$("#newWeeklyForm").toggle();
})

$('#newDailyButton').click(function(){
	$("#newDailyForm").toggle();
})


$('#newDaily').submit(function(event){
	event.preventDefault();
	var dailyToDo = $(this).serialize();
		$.post('/new', dailyToDo, function(data){
			console.log(data);
			$('#dailyToDos').append(
				`
				<li class="list-group-item">
						<span class="lead"> 
							${data[0].task_name}
						</span>
						<div class="pull-right">
							<a href="/${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
								<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
							</a>
							<form method="POST" action="/${data[0].task_id}/delete?_method=DELETE" class="inline"> 
								<button type="submit" class="btn btn-sm btn-danger"><img class="zbutton" src="https://png.icons8.com/windows/50/ffffff/cancel.png"></button>
							</form>
						</div>
						<div class=clearfix></div>
					</li>

				`
				)
			$('#newDaily').find('.form-control').val("");
	});
});

$('#newWeekly').submit(function(event){
	event.preventDefault();
	var dailyToDo = $(this).serialize();
		$.post('/new', dailyToDo, function(data){
			console.log(data);
			$('#weeklyToDos').append(
				`
				<li class="list-group-item">
						<span class="lead"> 
							${data[0].task_name}
						</span>
						<div class="pull-right">
							<a href="/${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
								<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
							</a>
							<form method="POST" action="/${data[0].task_id}/delete?_method=DELETE" class="inline"> 
								<button type="submit" class="btn btn-sm btn-danger"><img class="zbutton" src="https://png.icons8.com/windows/50/ffffff/cancel.png"></button>
							</form>
						</div>
						<div class=clearfix></div>
					</li>

				`
				)
			$('#newWeekly').find('.form-control').val("");
	});
});