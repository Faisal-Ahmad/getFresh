var express= require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('Welcome to express server...');
});
app.get('*',function(req,res){
	res.send('404 error');
})

app.listen(5000, function(){
	console.log('Server started at 5000....');
})