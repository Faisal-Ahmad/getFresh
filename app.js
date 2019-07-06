//declaration
var express= require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var login = require('./controllers/login');
var register = require('./controllers/register');
var admin = require('./controllers/admin');
var home = require('./controllers/home');
var supplier = require('./controllers/supplier');
var employee = require('./controllers/employee');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({'extended':false}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use(express.static(__dirname+'/public'));
app.use('/login',login);
app.use('/supplier',supplier);
app.use('/register',register);
app.use('/admin',admin);
app.use('/home',home);
app.use('/employee',employee);


//routing
app.get('/', function(req, res){
	res.send('Welcome to express server...');
});
app.get('*',function(req,res){
	res.send('404 error');
})

app.listen(5000, function(){
	console.log('Server started at 5000....');
})