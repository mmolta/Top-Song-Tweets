'use strict'

require('dotenv').config()
const spotifyWebApi = require('spotify-web-api-node')

// instantiate the Spotify API
let spotifyApi = new spotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

// dummy data for artist and country name
var artistName = 'Two+Door+Cinema+Club'
var countryName = 'FR'

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

		// isolate & return the top track in the given country from the response body
		return topTracks.body.tracks[0].name
	}).catch(err => {
		console.log('Error making the Spotify API calls: ', err.message)
	})

module.exports = {
	topTrack
}