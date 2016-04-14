var http = require('http');
const BufferList = require('bl');
http.get(process.argv[2], function(res)
{
	res.setEncoding('utf8');
	res.pipe(BufferList(function (err, data)
	{
	console.log(data.length);
	console.log(data.toString());
	}));	
});
