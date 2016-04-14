var net = require('net');
//var moment = require('moment');
var port = process.argv[2];
var date = new Date();
function zero(i)
{
	return(i<10 ? '0' : '')+i;
}
var server = net.createServer(function (socket)
{
	socket.end(date.getFullYear()+'-'+zero(date.getMonth()+1)+'-'+zero(date.getDate())+' '+zero(date.getHours())+':'+zero(date.getMinutes())+'\n');
	//socket.end(moment().format('YYYY-MM-DD HH:mm')+'\n');	
});
server.listen(port);
