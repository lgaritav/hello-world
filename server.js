var express = require('express') 
var app = express()
	app.get('/', function (req, res) {   
		res.send('Hello World!');
		process.exit(0);
	});
	app.get('/quit', function (req, res) {   
	  res.send('close');
	});	
	app.listen(3000);
module.exports = app;