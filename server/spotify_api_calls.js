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

// instantiate the API
var topTrack = spotifyApi.clientCredentialsGrant()
	.then(data => {
		spotifyApi.setAccessToken(data.body['access_token'])

		// Search an artist to get the artist ID
		return spotifyApi.searchArtists(artistName)
	}).then(foundArtist => {
		// isolate the artist ID from the response body 
		let artistID = foundArtist.body.artists.items[0].id

		// use the artist ID to get their top tracks
		return spotifyApi.getArtistTopTracks(artistID, countryName)
	}).then(topTracks => {

		// isolate the top track in the given country from the response body
		let topTrack = topTracks.body.tracks[0].name
	}).catch(err => {
		console.log('Something went wrong: ', err.message)
	})

module.exports = {
	Promise.resolve(topTrack)
}