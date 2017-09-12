// HTTP SERVER with file name server.js

/*var http = require("http");

http.createServer(function(request, response){
	console.log("Request Received.");
	response.writeHead(200, { "content-type" : "text/plain"});
	response.write("Write ");
	response.end();
}).listen(8888);
console.log("Server Has Started.");
*/
/* We could also write our code as 

var http = = require("http");
var server = http.createServer();
server.listen(8888);

*/
// We could also achieve the same by refactoring our code to :

var http = require("http");
var url = require("url");

function start(route, handle){
function onRequest(request, response){	
	
	//console.log("Request Received.");
	var postData = "";

	var pathname = url.parse(request.url).pathname;

	console.log("Request for " + pathname + " Received.");

	request.setEncoding("utf8");

	 request.addListener("data", function(postDataChunk) {
	 postData += postDataChunk;
	 console.log("Received POST data chunk '"+
	 postDataChunk + "'.");
	 
});

request.addListener("end", function() {
route(handle, pathname, response, postData);
});
	//var content = route(handle, pathname);
	//route(handle, pathname, response);
	//response.writeHead(200, { "content-type" : "text/plain"});
	//response.write(content);
	//response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server Has Started.");	
}
exports.start = start;

// wht are we doing it that way