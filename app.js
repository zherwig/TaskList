//
// VARIABLES
//

var express = require("express"),
    app = express(),
    mysql = require("mysql")
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(methodOverride('_method'));

var connection =  mysql.createConnection({
	host	:'localhost',
	user	:'root',
	database: 'task_list_test',
	password: '$p1212h$'
});

//
// ROUTES
//

app.get("/", function(req,res){
	var qDaily = 'SELECT task_id, task_name, task_description, task_type FROM tasks WHERE task_type="daily"';
	connection.query(qDaily, function (error, results){
	if(error) throw error;
	var daily_list = results;
		var qWeekly = 'SELECT task_id, task_name, task_description, task_type FROM tasks WHERE task_type="weekly"';
		connection.query(qWeekly, function (error, results){
		if(error) throw error;
		var weekly_list = results;
		res.render("home.ejs", {daily_list:daily_list, weekly_list:weekly_list});
		});
	});

});


app.get("/new", function(req,res){
	res.render("new.ejs")
});

app.post("/new", function(req,res){
	var task = {
		"task_name" : req.body.name,
		"task_description" : req.body.description,
		"task_type" : req.body.type	
	}
	connection.query('INSERT INTO tasks SET ?', task, function(err,result){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/")
		}

	});
});

app.get("/:id/update", function(req,res){
	var id = req.params.id
	var q1 = "SELECT task_id, task_name, task_description, task_type FROM tasks WHERE task_id='" + id + "'";
	connection.query(q1, function (error, results){
	if(error) throw error;
	var update_item = results;
	res.render("edit.ejs", {update_item:update_item});
	});
});

app.put("/:id/update", function(req,res){
	var id = {"task_id" : req.params.id}
	var task = {
		"task_name" : req.body.name,
		"task_description" : req.body.description,
		"task_type" : req.body.type	
	}
	connection.query('UPDATE tasks SET ? WHERE ?', [task,id], function(err,result){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/")
		}

	});
});

app.delete("/:id/delete", function(req,res){
	var id = {"task_id" : req.params.id}
	connection.query('DELETE FROM tasks WHERE ?', id, function(err,result){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/")
		}

	});
});

//
// LISTENER
//

app.listen(3000,function(){
	console.log("Serving task list on post 3000")
})