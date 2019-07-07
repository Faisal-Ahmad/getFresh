<<<<<<< HEAD
//declaration
var express= require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var register = require('./controllers/register');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var home = require('./controllers/home');
=======
//DEC
var express 		= require('express');
var ejs 			= require('ejs');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var home 			= require('./controllers/home');
var signup 			= require('./controllers/signup');
>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae
var supplier = require('./controllers/supplier');
<<<<<<< HEAD
var employee = require('./controllers/employee');
var app = express();
=======
//var register 		= require('./controllers/register');
var app 			= express();
>>>>>>> 28ec38399c7c62c8fcc8a3529e7dfd67c313f514


//CONFIG
app.set('view engine', 'ejs');



//MIDDLEWARE
app.use(bodyParser.urlencoded({'extended': false}));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use(express.static(__dirname+'/public'));
<<<<<<< HEAD
app.use('/login',login);
app.use('/logout', logout);
app.use('/supplier',supplier);
app.use('/register',register);
app.use('/admin',admin);
app.use('/customer',customer);
app.use('/home',home);
<<<<<<< HEAD
app.use('/employee',employee);
=======
=======
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/signup', signup);
//app.use('/register', register);
app.use('/supplier',supplier);
app.use('/assets', express.static('ext'))
>>>>>>> 28ec38399c7c62c8fcc8a3529e7dfd67c313f514


>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae

//ROUTING
app.get('/', function(req, res){
<<<<<<< HEAD
	res.render('home/index');
=======
	res.send('Welcome to express web server...');
});


app.get('/setcookie', function(req, res){
	res.cookie('my_cookie', 'sdhdgshjdbahdbahjsdbshbd');
	res.send('done!');
});

app.get('/viewcookie', function(req, res){
	
	res.send(req.cookies['my_cookie']);
>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae
});


app.get('/rmcookie', function(req, res){
	res.clearCookie('my_cookie');
	res.send('removed!');
});





//SERVER STARTUP
app.listen(3000, function(){
	console.log('Server started at 3000....');
})


