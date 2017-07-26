/*const twit = require('twit')
const twitterRequest = require('request')*/

const spotifyArtists = 'https://api.spotify.com/v1/artists/'
const spotifySearch = 'https://api.spotify.com/v1/search?q='

// set up the AJAX API
const request = new XMLHttpRequest()

// get a handle on the buttons - DEMO ONLY
const tracksButton = document.getElementById('trackz-btn')
const searchButton = document.getElementById('search-btn')

// get the access code
let accessCode = () => {
	
}

// get the inputted artist name and country

// get the artist ID from Spotify 
// artist name must be parsed so spaces in between are converted to + signs
let getArtistID = (artistName) =>{
	console.log('artist name as inputted', artistName)
	let nameReformatted = artistName.split(' ').join('+')
	console.log('artist name after reformating', nameReformatted)
	let url = spotifySearch + nameReformatted + '&type=artist'
	request.open('GET', url)
	request.setRequestHeader('Authorization', 'Bearer' + '5b3a7c070e664df7ac886fb7218c9eb7')
	request.onload = () => {
		if (request.status === 200) {
			console.log('request successful ', request)
		}else {
			console.log('request failed with a status of: ', request.status)
			console.log(url)
		}
	}
	request.send(null)
}

// AUTHORIZATION FLOW: use client ID/secret to communicate with spotify in order to get an access token
// use the access token to make a good request 
let getArtistTopTracks = (artistID, country) => {
	// path for an artists top tracks
	let url = spotifyArtists + artistID + '/top-tracks' + `?country=${country}`
	request.open('GET', url)
	request.setRequestHeader('Authorization', 'Bearer' + '5b3a7c070e664df7ac886fb7218c9eb7')
	request.onload = () => {
		if (request.status === 200) {
			console.log('request successful ', request)
		}else {
			console.log('request failed with a status of: ', request.status)
			console.log(url)
		}
	}
	request.send(null)
}

// wrap the onlick in a function to make it an event handler, otherwise it will
// put the evaluatied value of getARtistTopTracks on the onclick 
searchButton.onclick = () => {
	getArtistID('The Rolling Stones')
}
tracksButton.onclick = () => {
	getArtistTopTracks('4tZwfgrHOc3mvqYlEYSvVi', 'FR')
}

/*
let bot = new twit({
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