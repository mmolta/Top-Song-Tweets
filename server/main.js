'use strict'

// env process
require('dotenv').config()

const twit = require('twit')
const request = require('request')
const spotify_calls = require('./spotify_api_calls')

console.log('spotify api calls functions as it stands: ', spotify_calls)

let bot = new twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: 	process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

// for testing only to make sure the tweet is working
// this URL will eventually be replaced with the spotify API call!!
const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en'

// function that performs the API call (will update to be Spotify data)
function getSong(callback){
	request(url, function(err, res, body) {
		console.log('error: ', err)
		console.log('response with statusCode: ', res.statusCode)
		callback(body)
	})
}

// callback function passed into the getSong function and tweets the result
function tweet(chars){
	console.log('paramater for tweet function: ', chars)
	bot.post('statuses/update', {status: chars}, function(err, data, response) {
		console.log('data from tweet function: ', data)
	})
}

// Commenting this out for now while I set up the spotify calls/parsing
//getSong(tweet)