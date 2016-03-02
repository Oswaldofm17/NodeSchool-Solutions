var fs = require('fs');
var buf =fs.readFile(process.argv[2], function callback(err, data)
{
 if(err==true)
 {
  console.log(err);
 }
 console.log(data.toString().split('\n').length-1);
});


