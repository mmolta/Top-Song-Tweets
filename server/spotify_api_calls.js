'use strict'

require('dotenv').config()
const spotifyWebApi = require('spotify-web-api-node')
const query = require('./twitter_get').requestInfo

// instantiate the Spotify API
let spotifyApi = new spotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

// returns a promise that resolves to an array containing topTrack, artistName, countryName
var topTrack = query.then(info => {

	// remove the trailing/leading whitespace in artistName and countryName
	let artistName = info[0].trim()
	let countryName = info[1].trim()

	// instantiate the Spotify API
	spotifyApi.clientCredentialsGrant()
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

			// isolate & return the top track in the given country as well as the artistName and countryName
			return [topTracks.body.tracks[0].name, artistName, countryName]
		}).catch(err => {
			console.log('Error making the Spotify API calls: ', err.message)
		})
})

module.exports = { topTrack }