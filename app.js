const express = require('express');
const path = require('path');
const app = express();
var cons = require('consolidate');
const fs = require('fs') 

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function(req, res, next) {
    res.render('medium1');
});

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});

module.exports = app;

