//toggle to show form to create new weekly item on home.ejs

$('#newWeeklyButton').click(function(){
	$("#newWeeklyForm").toggle();
})

//toggle to show form to create new daily item on home.ejs
$('#newDailyButton').click(function(){
	$("#newDailyForm").toggle();
})

//toggle to show form to create new daily item on home.ejs
$('#newDelegatedButton').click(function(){
	$("#newDelegatedForm").toggle();
})

//toggle to show hidden weekly todo items on home.ejs
$('#unhideWeekly').click(function(){
	$(".weeklyitemhold").toggle();
})

//toggle to show hidden daily todo items on home.ejs
$('#unhideDaily').click(function(){
	$(".dailyitemhold").toggle();
})

//Actions of submit on daily new task form on home.ejs
$('#newDaily').submit(function(event){
	event.preventDefault();
	var dailyToDo = $(this).serialize();
		$.post('/new', dailyToDo, function(data){
			if(data[0].task_status ==  "hold"){
				$('#dailyToDos').append(
					`
					<li class="list-group-item dailyitemhold">
						<div class="wrapper">	
							<div class="floatr mainbuttons">
								<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class="lead"> 
								${data[0].task_name}
							</div>
							<div class="nextaction"> 
								<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
							</div>						
						<div>	
					</li>
					`
					)
			} else if(data[0].task_status ==  "priority"){
				$('#dailyToDos').append(
					`
					<li class="list-group-item priority">
						<div class="wrapper">	
							<div class="floatr mainbuttons">
								<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class="lead"> 
								${data[0].task_name}
							</div>
							<div class="nextaction"> 
								<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
							</div>						
						<div>	
					</li>

					`
					)
			} else {
				$('#dailyToDos').append(
					`
					<li class="list-group-item">
						<div class="wrapper">	
							<div class="floatr mainbuttons">
								<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class="lead"> 
								${data[0].task_name}
							</div>
							<div class="nextaction"> 
								<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
							</div>						
						<div>	
					</li>

					`
					)
			};
			//clear values in form
			$('#newDaily').find('.form-control').val("");
			//hide form
			$("#newDailyForm").toggle();
	});
});

//Actions of submit  on weekly new task form on home.ejs
$('#newWeekly').submit(function(event){
	event.preventDefault();
	var weeklyToDo = $(this).serialize();
		$.post('/new', weeklyToDo, function(data){
			if(data[0].task_status ==  "hold"){
				$('#weeklyToDos').append(
					`
					<li class="list-group-item weeklyitemhold">
						<div class="wrapper">	
							<div class="floatr mainbuttons">
								<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class="lead"> 
								${data[0].task_name}
							</div>
							<div class="nextaction"> 
								<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
							</div>						
						<div>	
					</li>
					`
					)
			} else if(data[0].task_status ==  "priority"){
				$('#weeklyToDos').append(
				`
				<li class="list-group-item priority">
					<div class="wrapper">	
						<div class="floatr mainbuttons">
							<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
								<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
							</a>
							<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
								<div class="checkbox hiddencheck">
									<label><input type="checkbox" name="status" value="done" checked>Done</label>
								</div>
								<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
							</form>
						</div>
						<div class="lead"> 
							${data[0].task_name}
						</div>
						<div class="nextaction"> 
							<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
						</div>						
					<div>	
				</li>

				`
				)
			} else {
				$('#weeklyToDos').append(
				`
				<li class="list-group-item">
					<div class="wrapper">	
						<div class="floatr mainbuttons">
							<a href="${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
								<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
							</a>
							<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
								<div class="checkbox hiddencheck">
									<label><input type="checkbox" name="status" value="done" checked>Done</label>
								</div>
								<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
							</form>
						</div>
						<div class="lead"> 
							${data[0].task_name}
						</div>
						<div class="nextaction"> 
							<span><strong><em>Next action: </em></strong></span>${data[0].NextAction}
						</div>						
					<div>	
				</li>

				`
				)
			}
			//clearing values of form
			$('#newWeekly').find('.form-control').val("");
			//hide form
			$("#newWeeklyForm").toggle();
	});
});



//Actions of submit on delegated.ejs
$('#newDelegated').submit(function(event){
	event.preventDefault();
	var delegatedToDo = $(this).serialize();
		$.post('/new', delegatedToDo, function(data){
			if(data[0].task_status ==  "hold"){
				$('#delegatedToDos').append(
					`
					<li class="list-group-item delegateditemhold">
							<span class="lead"> 
								${data[0].task_name}
							</span>
							<div class="pull-right">
								<a href="/${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class=clearfix></div>
						</li>

					`
					)
			} else if(data[0].task_status ==  "priority"){
				$('#delegatedToDos').append(
					`
					<li class="list-group-item priority">
							<span class="lead"> 
								${data[0].task_name}
							</span>
							<div class="pull-right">
								<a href="/${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class=clearfix></div>
						</li>

					`
					)
			} else {
				$('#delegatedToDos').append(
					`
					<li class="list-group-item">
							<span class="lead"> 
								${data[0].task_name}
							</span>
							<div class="pull-right">
								<a href="/${data[0].task_id}/update" class="btn btn-sm btn-warning"> 
									<img class="zbutton" src="https://png.icons8.com/ios-glyphs/50/ffffff/multi-edit.png">
								</a>
								<form action='/${data[0].task_id}/done?_method=PUT' method="POST" class="inline">
									<div class="checkbox hiddencheck">
										<label><input type="checkbox" name="status" value="done" checked>Done</label>
									</div>
									<button type="submit" class="btn btn-sm btn-success"><img class="zbutton" src="https://png.icons8.com/metro/32/ffffff/checkmark.png"></button>
								</form>
							</div>
							<div class=clearfix></div>
						</li>

					`
					)
			};
			//clear values in form
			$('#newDelegated').find('.form-control').val("");
			//hide form
			$("#newDelegatedForm").toggle();
	});
});