//
// VARIABLES
//

var express = require("express"),
    app = express()

app.set("view engine","ejs");


var list = ["Saab","Volvo","BMW"];


//
// ROUTES
//

app.get("/", function(req,res){
	res.render("home.ejs", {list:list});
	});



//
// LISTENER
//

app.listen(8080,function(){
	console.log("Serving task list on post 3000")
})