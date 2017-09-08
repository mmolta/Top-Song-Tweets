'use strict'

// env process
require('dotenv').config()

const twit = require('twit')
let spotify_calls = require('./spotify_api_calls').topTrack

let bot = new twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: 	process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

let requestInfo = bot.get('search/tweets', {q: '@top_song_tweets', count: 100}, (err, data, response) => {
	// Extract the text of the tweet and remove the @top_song_tweets as well as trailing/leading spaces
	return data.statuses[0].text.replace(/@top_song_tweets/g,'').trim().split('-')
})

module.exports = { requestInfo }


// Carry out the tweet function once the imported spotify API promise is resolved
/*spotify_calls.then(topTrack => {
	// For now, artist and country are dummy data consistent with spotify_api_calls.js
	let artist = 'Anderson .Paak'
	let country = 'FR'
	let tweet = `The top song for ${artist} in ${country} is ${topTrack}`

	// successful tweet
	bot.post('statuses/update', {status: tweet}, (err, data, response) => {
		console.log('data from tweet function: ', data)
	})
}).catch(err => {
	console.log('Error while tweeting: ', err)
})*/