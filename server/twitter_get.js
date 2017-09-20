'use strict'

// env process
require('dotenv').config()
const twit = require('twit')

let bot = new twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: 	process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

let requestInfo = bot.get('search/tweets', {q: '@top_song_tweets', count: 100}, (err, data, response) => {
	return data
}).then(data => {
	// Extract the handle of whoever asked for the top song
	let handle = data.data.statuses[0].user.screen_name
	
	// Extract the text of the tweet and remove the @top_song_tweets and returns the desired info in an array
	let question = data.data.statuses[0].text.replace(/@top_song_tweets/g,'').split('-')
	
	return {question, handle}
})

module.exports = {requestInfo, bot}