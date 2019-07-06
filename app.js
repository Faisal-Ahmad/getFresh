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
var supplier = require('./controllers/supplier');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({'extended':false}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use(express.static(__dirname+'/public'));
app.use('/login',login);
app.use('/logout', logout);
app.use('/supplier',supplier);
app.use('/register',register);
app.use('/admin',admin);
app.use('/customer',customer);
app.use('/home',home);

//routing
app.get('/', function(req, res){
	res.render('home/index');
});
app.get('*',function(req,res){
	res.send('404 error');
})

app.listen(5000, function(){
	console.log('Server started at 5000....');
})