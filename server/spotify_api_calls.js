'use strict'

require('dotenv').config()
const spotifyWebApi = require('spotify-web-api-node')
let query = require('./twitter_get').requestInfo

// instantiate the Spotify API
const spotifyApi = new spotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

async function getTopTrack() {
	// resolve Twitter get request to get tweeted artist name/info & handle of person asking
	let queryInfo = await query
	
	let artistName = queryInfo.question[0].trim()
	let countryName = queryInfo.question[1].trim()
	let personAsking = '@' + queryInfo.handle

	// set access token
	let clientCredentials = await spotifyApi.clientCredentialsGrant()
	spotifyApi.setAccessToken(clientCredentials.body['access_token'])

	// fetch artist ID
	let artistsSpotifyInfo = await spotifyApi.searchArtists(artistName)
	let artistID = artistsSpotifyInfo.body.artists.items[0].id

	// use the artist ID to get their top tracks 
	let artistTracksInfo = await spotifyApi.getArtistTopTracks(artistID, countryName)
	let topTracks = artistTracksInfo.body.tracks[0].name

	return [topTracks, artistName, countryName, personAsking]
}

module.exports = { getTopTrack }