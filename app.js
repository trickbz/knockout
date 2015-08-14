var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var posts = [
	{ id: 1, title: 'Title 1', body: 'Body 1', createdOn: new Date() },
	{ id: 2, title: 'Title 2', body: 'Body 2', createdOn: new Date() },
	{ id: 3, title: 'Title 3', body: 'Body 3', createdOn: new Date() },
	{ id: 4, title: 'Title 4', body: 'Body 4', createdOn: new Date() },
];

var lastId = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "html");
app.use(express.static(__dirname));

app.get("/posts", function (req, res) {
	res.send(posts);
});

app.post('/posts', function (req, res) {
	lastId++;
	var post = {
		id: lastId,
		title: req.body.title,
		body: req.body.body,
		createdOn: req.body.title
	};
	posts.push(post);
	res.send([]);
});

app.get('/posts/:id', function (req, res) {
	var id = req.params.id;
	var post = posts.filter(function (post) {
		return (post.id == id);
	});
	res.send(post);
});

app.delete('/posts:id', function (req, res) {
	var id = req.params.id;
	posts = posts.filter(function (post) {
		return (post.id != id);
	});
	res.send([]);
});

app.listen(3000, function () {
	console.log("http://localhost:3000 is up and running.");
});