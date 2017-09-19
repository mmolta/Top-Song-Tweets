'use strict'

let spotify_calls = require('./spotify_api_calls').topTrack
let twitter_calls = require('./twitter_get.js')

let bot = twitter_calls.bot

let postTweet = () => {

	// Carry out the tweet function once the imported spotify API promise is resolved
	spotify_calls.then(artistInfo => {

		console.log('artistInfo ', artistInfo)
		//let tweet = `The top song for ${artistInfo[1]} in ${artistInfo[2]} is ${artistInfo[0]}`

		//console.log('THE TWEET IN ALL ITS GLORY ', tweet)
		//let bot = require('./twitter_get').bot

		// successful tweet
	/*	bot.post('statuses/update', {status: tweet}, (err, data, response) => {
			console.log('data from tweet function: ', data)
		}).catch(err => {
			console.log('Error while tweeting: ', err)
		})*/
	})

}

postTweet()