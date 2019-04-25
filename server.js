var express = require('express');
var app = express();  
var path = require('path');
var part = 8095;
console.log('pad端:'+part);
app.listen(part);
app.use(express.static(path.join(__dirname, '/')));
// app.get('*', function(req, res) {
// 	console.log(req)
// });
app.get('/', function(req, res) {
	res.sendfile('study_center.html');
});
app.post('/api/login', function (req, res) {
	console.log(111111111111)
	res.sendfile('./api/login')
});
