// Sets up dependencies for the app

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the initial express app

var app = express();
var PORT = 3000;

// Sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));