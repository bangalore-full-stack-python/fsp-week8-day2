const express = require('express')
const app = express()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.redirect('index');
});

app.get('/index', function (req, res) {
	res.sendFile( __dirname + "/templates/" + "index.html" );
});

app.get('/register', function (req, res) {
	res.sendFile( __dirname + "/templates/" + "register.html" );
});

app.get('/process_get', function (req, res) {
    response = {
    	username:req.query.username,
    	password:req.query.password
   };
   console.log(response);
   res.sendFile( __dirname + "/templates/" + "my_account.html");
});

app.get('/login', function (req, res) {
	res.sendFile( __dirname + "/templates/" + "login.html" );
});

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
    	username:req.body.username,
    	password:req.body.password
   };
   console.log(response);
   res.sendFile( __dirname + "/templates/" + "my_account.html");
});

app.get('/my_account', function (req, res) {
	res.sendFile( __dirname + "/templates/" + "my_account.html" );
});


app.listen(3000, function() {
    console.log('Event Planner')
});