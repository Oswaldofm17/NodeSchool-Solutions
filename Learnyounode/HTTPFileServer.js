var http = require('http');
var port = process.argv[2];
var fs = require('fs');
var file = process.argv[3];
var server =http.createServer(function(req,res)
{
	res.writeHead(200, {'Content-Type': 'text/plain' });
	fs.createReadStream(file).pipe(res);	
});
server.listen(port);
