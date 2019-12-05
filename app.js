var express = require('express'),
	app     = express();

var msg = "Hello";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql-gamification.inmbzp8022.in.dst.ibm.com",
  user: "xxuser",
  password: "welcome1",
  database: "sampledb"
});

app.get("/", function(req, resp){
	console.log(msg);
	
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		con.query("select * from XXIBM_PRODUCT_CATALOG", function (err, result) {
			if (err) throw err;
			console.log("Result: " + result);
		});
	});
	
	resp.send(msg);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
