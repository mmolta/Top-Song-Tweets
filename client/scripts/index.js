const twit = require('twit')
const request = require('request')

const spotifyPath = 'https://api.spotify.com/v1/artists/'

// set up the AJAX API
const request = new XMLHttpRequest()

let getArtistTopTracks = function(artistID, country) {
	// path for an artists top tracks
	let url = spotifyPath + artistID + '/top-tracks' + `?country=${country}`
	request.open('GET', url)
	request.onload = () => {
		if (request.status === 200) {
			console.log('request successful, ' request)
		}else {
			console.log('request failed with a status of: ', request.status)
		}
	}
	request.send(null)
}

/*// deal with response from the spotify server
request.onreadystatechange = function() {
	let done = 4
	let ok = 200
	if(request.readyState === done) {
		if(request.status === ok) console.log(request.responseText)
	} else {
		console.log('Error: ' + request.status)
	}
}
module.exports = {getArtistTopTracks}*/

getArtistTopTracks('43ZHCT0cAZBISjO8DG9PnE', 'SE')
/*let bot = new twit({
	consumer_key: YmfMdmMVJotxKyJl85DBSRLZm,
	consumer_secret: LFSWBoVT8n8QiCtOCt96cIrhO2FLdTYsPDJQqUg4H10y3qcYPA,
	access_token: 	1694764148-LnNfJyMcHPIOTGh2OMhBd3z5jGx9tHpOJbuT1MO,
	access_token_secret: Rs7LFhreS7kF17I5cI66m2qP7rkvbPpFpyNvJDquhrdEI
})

function tweet(chars){
	console.log(chars)
	bot.post('statuses/update', {status: tweet}, function(err, data, response) {
		console.log(data)
	})
}*/