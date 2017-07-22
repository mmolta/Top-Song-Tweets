const spotifyPath = 'https://api.spotify.com/spotify/artists/'
const request = new XMLHttpRequest()

let getArtistTopTracks = function(artistID, country) {
	let url = spotifyPath + artistID + 'top-tracks'
	request.open('GET', url)
	request.send(null)
}

// deal with response from the spotify server
request.onreadystatechange = function() {
	let done = 4
	let ok = 200
	if(request.readyState === done) {
		if(request.status === ok) console.log(request.responseText)
	} else {
		console.log('Error: ' + request.status)
	}
}

module.exports = {getArtistTopTracks}