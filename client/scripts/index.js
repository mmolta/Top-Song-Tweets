'use strict'

// variables for access token requests
const spotifyAccess = 'https://accounts.spotify.com/authorize?'
const client_id = 'client_id=' + process.env.SPOTIFY_CLIENT_ID
const redirect_uri = '&redirect_uri=http://localhost:8888'
const response_type = '&response_type=token'
		
const spotifyArtists = 'https://api.spotify.com/v1/artists/'
const spotifySearch = 'https://api.spotify.com/v1/search?q='

// set up the AJAX API
const request = new XMLHttpRequest()

// get a handle on the buttons - DEMO ONLY
const tracksButton = document.getElementById('trackz-btn')
const searchButton = document.getElementById('search-btn')

// get the access code via Spotify's Implicit Grant Flow
let getAccessCode = () => {
	let url = spotifyAccess + client_id + redirect_uri + response_type
	console.log('access code query string', url)
	request.open('GET', url)
	request.setRequestHeader('Access-Control-Allow-Origin', '*')
	request.send(null)
}

// get the access code from the hash of the URL (hashParams function from Spotify tutorial)
function getHashParams() {
	let hashParams = {};
	let e, r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1);
	while ( e = r.exec(q)) {
		hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
}

let access_token = getHashParams().access_token

console.log('access token? ', access_token)

/* get the inputted artist name and country
const artistName = document.getElementById('artist-name')
const countryName = document.getElementById('country-name')
*/

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

// wrap the onlick in a function to make it an event handler, otherwise it will
// put the evaluatied value of getARtistTopTracks on the onclick 
getAccessCode()

searchButton.onclick = () => {
	getArtistID('The Rolling Stones')
}
tracksButton.onclick = () => {
	getArtistTopTracks('4tZwfgrHOc3mvqYlEYSvVi', 'FR')
}