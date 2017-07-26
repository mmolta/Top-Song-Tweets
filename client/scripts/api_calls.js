const spotifyPath = 'https://api.spotify.com/v1/artists/'

// set up the AJAX API
const request = new XMLHttpRequest()

let getArtistTopTracks = function(artistID, country) {
	// path for an artists top tracks
	let url = spotifyPath + artistID + '/top-tracks' + `?country=${country}`
	request.open('GET', url)
	request.onload = () => {
		if (request.status === 200) {
			console.log('request successful, ' request)
		}else {
			console.log('request failed with a status of: ', request.status)
		}
	}
	request.send(null)
}

/*// deal with response from the spotify server
request.onreadystatechange = function() {
	let done = 4
	let ok = 200
	if(request.readyState === done) {
		if(request.status === ok) console.log(request.responseText)
	} else {
		console.log('Error: ' + request.status)
	}
}

module.exports = {getArtistTopTracks}*/