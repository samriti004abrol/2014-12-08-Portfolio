var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<html><body>Home , Url was : ' + request.url + '</body></html>');
	console.log(request.url);
}).listen(3001, 'localhost');
console.log('serverRunning');