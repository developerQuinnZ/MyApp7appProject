var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
UserInfo = require('./models/userInfo');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World! updating? Now?')
})

app.get('/api/genres',function(req, res){
	Genre.getGenres(function(err, genres) {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.get('/api/books',function(req, res){
	Book.getBooks(function(err, books) {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id',function(req, res){
	Book.getBookById(req.params._id, function(err, book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.get('/api/userinfo',function(req, res){
	UserInfo.getUserInfo(function(err, user) {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/userinfo',function(req, res){
	var user = req.body;
	UserInfo.addUser(user, function(err, user) {
		if(err){
			console.error(err);
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/books',function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/genres',function(req, res){
	var genre = req.body;
	Genre.addGenres(genre, function(err, genre) {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})