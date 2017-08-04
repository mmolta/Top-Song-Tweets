'use strict'

const request = require('request')

// variables for access token requests
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

// Utilizing Spotify's Client Credentials Authorization Flow
var authentication = {
	url: 'https://accounts.spotify.com/api/token',
	headers: {
		'Authorization': 'Basic ' + (new Buffer(clien_id + ':' + client_secret).toString('base64'))
	},
	form: {
		grant_type: 'client_credentials'
	},
	json: true
}

//

/* get the inputted artist name and country (from the incoming tweet...) */

// get the artist ID from Spotify 
// artist name must be parsed so spaces in between are converted to + signs
let getArtistID = (artistName) =>{
	let nameReformatted = artistName.split(' ').join('+')
	let url = spotifySearch + nameReformatted + '&type=artist'
	request.open('GET', url)
	request.setRequestHeader('Authorization', 'Bearer' + process.env.SPOTIFY_CLIENT_SECRET)
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
	request.setRequestHeader('Authorization', 'Bearer' + process.env.SPOTIFY_CLIENT_SECRET)
	request.onload = () => {
		if (request.status === 200) {
			console.log('request successful ', request)
		}else {
			console.log('request failed with a status of: ', request.status)
		}
	}
	request.send(null)
}

module.exports = {
	access_code: getAccessCode(),
	artist_id: getArtistID(),
	artist_top_tracks: getArtistTopTracks()
}