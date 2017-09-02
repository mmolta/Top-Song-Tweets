'use strict'

require('dotenv').config()
const request = require('request')
const spotifyWebApi = require('spotify-web-api-node')

// instantiate the Spotify API
let spotifyApi = new spotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

// dummy data for artist and country name for now
var artistName = 'Daft+Punk'
var countryName = 'US'

// Utilizing Spotify's Client Credentials Authorization Flow
var authentication = {
	url: 'https://accounts.spotify.com/api/token',
	headers: {
		'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
	},
	form: {
		grant_type: 'client_credentials'
	},
	json: true
}

// POST request to Spotify to get an access code
request.post(authentication, (error, response, body) => {
	if(!error && response.statusCode === 200) {
		let token = body.access_token

		// use the access code to make subsequent requests
		let searchOptions = {
			url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
			headers: {
				'Authorization': 'Bearer ' + token
			},
			json: true
		}

		// first get request for the artist ID 
		request_promise.get(searchOptions, (error, response, body) => {
			artistID = body.artists.items[0].id
			console.log('artist ID in the get request ', artistID)
			return artistID
		}).then(artistID => {
			console.log('do i have it here ', artistID)
			return spotifyApi.getArtistTopTracks(artistID, countryName)
		}).then(topTrack => {
			console.log('top track of some bullshit', topTrack)
		})

		// second get uses the ID to get their top track
/*		let trackOptions = {
		}

		request.get(trackOptions, (error, response, body) => {

		})*/

	}else{
		console.log('failed due to error ', error)
	}
})

// will eventually export TopTrack as an object
module.exports = {}