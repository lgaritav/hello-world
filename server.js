var express = require('express') 
var app = express()
	app.get('/', function (req, res) {   
		res.send('Hello World!');
		return 'Hello World!';
	});
	app.get('/quit', function (req, res) {   
	  res.send('close');
	});	
	app.listen(3000);
module.exports = app;