let getArtistTopTracks = function(artistID, country) {
	let url = spotifyPath + '/spotify/artists/' + artistID + 'top-tracks'
	return _____ ({
		url: url,
		data: {
			country: country
		}
	})
}

module.exports = {getArtistTopTracks}