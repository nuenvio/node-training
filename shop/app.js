var express = require('express');
var app = express();
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');

var Item = mongoose.model('Item', { name: String,cost: Number });

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
