'use strict'

let bot = require('./twitter_get.js').bot
let spotify_calls = require('./spotify_api_calls').getTopTrack

spotify_calls().then(info => {
	let tweet = `${info[3]}, the top song by ${info[1]} in ${info[2]} is '${info[0]}'`

	bot.post('statuses/update', {status: tweet}, (err, data, response) => {
		console.log('data from tweet function: ', data)
	}).catch(err => {
		console.log('Error while tweeting: ', err)
	})
})