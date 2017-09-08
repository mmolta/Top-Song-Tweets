'use strict'

require('dotenv').config()
const spotifyWebApi = require('spotify-web-api-node')
const query = require('./main.js').requestInfo

// instantiate the Spotify API
let spotifyApi = new spotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

// dummy data for artist and country name
var artistName = 'Anderson .Paak'
var countryName = 'FR'

// instantiate the Spotify API
var topTrack = query.then(artistQuery => {
	console.log('resolved promise from twitter bot ', artistQuery)

	}).then(spotifyApi.clientCredentialsGrant()
		.then(data => {
		spotifyApi.setAccessToken(data.body['access_token'])

		// Search an artist to get the artist ID
		return spotifyApi.searchArtists(artistName)


	}).then(foundArtist => {
		// isolate the artist ID from the response body 
		let artistID = foundArtist.body.artists.items[0].id

		// Make sure Spotify has that artist, in the specified country

		// use the artist ID to get their top tracks
		return spotifyApi.getArtistTopTracks(artistID, countryName)
	}).then(topTracks => {

		// isolate & return the top track in the given country from the response body
		return topTracks.body.tracks[0].name
	}).catch(err => {
		console.log('Error making the Spotify API calls: ', err.message)
	})
	)

module.exports = { topTrack }