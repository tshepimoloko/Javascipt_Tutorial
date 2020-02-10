//Clients & Servers
var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type': text/plain}); //200 is status, Content type is object, value is text or plain
  res.end('Hey ninjas')//end and send to browser
});
