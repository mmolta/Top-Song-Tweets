'use strict'

const express = require('express')
const app = express();
const port = 8888;

app.use(express.static((resolve(__dirname + '/client/view')));

app.listen(port, function(err) {
	if(err) throw err;
	console.log('Server listening on port ', port)
});