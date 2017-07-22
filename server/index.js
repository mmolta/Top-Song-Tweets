// set up the server and handle AJAX requests
const app = http.createServer(function(req, res) {
	if(req.url.indexOf('/scripts/' >= 0) {
		render(req.url.slice(1), 'application/javascript', hattpHandler)
	}else if(req.heads['x-requested-with'] === 'XMLHttpRequest') {
		// Ajax response will go here
	}else{
		render('client/index.html', 'text/html', httpHandler)
	})
})