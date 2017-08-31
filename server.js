// HTTP SERVER with file name server.js
/*var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, { "content-type" : "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
*/
/* We could also write our code as 

var http = = require("http");
var server = http.createServer();
server.listen(8888);

*/

// We could also achieve the same by refactoring our code to :
var a;

var http = require("http");

function start(){
function onRequest(request, response){
	console.log("Request Received.")
	response.writeHead(200, { "content-type" : "text/plain"});
	response.write("Hello World");
	response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server Has Started.");
	
}
exports.start = start;

// wht are we doing it that way