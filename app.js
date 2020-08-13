var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var routes = require('./routes/index');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.listen(80);
