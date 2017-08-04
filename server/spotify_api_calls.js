'use strict'

require('dotenv').config()
const request = require('request')
const request_promise = require('request-promise-native')

// variables for access token requests
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

// instantiate the topTrack & artistID variables here for scoping purposes
var topTrack = ''
var artistID = 0

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
		// THIS NEEDS WORK IT'S HORRIBLE
		// MAIN ISSUE: artistID is being retrieved successfully, but the value isn't being reassigned
		// due to some race condition(?) so I need to figure out a way to either use promises logically or
		// have access to artistID outside of the scope of the get request. 
		request_promise.get(searchOptions, (error, response, body) => {
			artistID = body.artists.items[0].id
			console.log('artist ID in the get request ', artistID)
		})
		.then(promisedID => {
			return promisedID.artists.items[0].id
		})
		.then(stuff => {
			console.log('what have i done ', stuff)
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