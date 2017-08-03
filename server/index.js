'use strict'

// env process
require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express();
const port = 8888;

// static file serving w/express
app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(port, function(err) {
	if(err) throw err;
	console.log('Server listening on port ', port)
});