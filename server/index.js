// set up the server and handle AJAX requests
const app = http.createServer(function(req, res) {
	if(req.url.indexOf('/scripts/' >= 0) {
		render(req.url.slice(1), 'application/javascript', httpHandler)
	}else if(req.headers['x-requested-with'] === 'XMLHttpRequest') {
		// Ajax response will go here
	}else{
		render('client/index.html', 'text/html', httpHandler)
	})
})

// render function reads contents of the requested file
function render(path, contentType, fn) {
	fs.readFile(__dirname, '/', path, 'utf-8', function(err, str) {
		fn(err, str, contentType)
	})
}

// httpHandler function checks for error & then serves up the file (or the error)
let httpHandler = function(err, str, contentType) {
	if(err) {
		res.writeHead(500, {'Content-Type': 'text/plain'})
		res.end('An error has occured: ', err.message)
	} else {
		res.writeHead(200, {'Content-Type ': contentType})
		res.end(str)
}