var http = require('http');
const BufferList = require('bl');
var urls = process.argv.slice(2);
var results = [];
var count = 0;
urls.forEach(function(url,i)
{
	http.get(url, function(res)
	{
		res.pipe(BufferList(function (err, data)
        	{
        		results[i]=data;
			count++;
			if(count === urls.length)
			{
				results.forEach(function(result)
				{
					console.log(result.toString());
				});
			}
        	}));
	});
});
