var querystring = require("querystring");
//var exec = require("child_process").exec;
function start(response, postData){
	console.log(" Request Handler 'start' was called. ");

	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; ' +
	'charset = UTF-8"/>'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Submit text"/>'+
	'</form>'+
	'</body>'+
	'</html>';

	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write(body);
	response.end();
	//var content = "empty";
	//exec("ls -lah",
	/*exec("find /",
		{timeout : 10000, maxBuffer : 20000*1024}, 
		function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(stdout);
		response.end();
	//content = stdout;
	});*/

	//return content;
}

function upload(response, postData){
	console.log(" Request Hnadler 'upload' was called.");
	response.writeHead(200, {"Content-Type" : "text/plain"});
	//response.write("You have sent : ", postData);
	response.write("You've sent the text: "+
	querystring.parse(postData).text);
	response.end();
	//return "Hello Uplaod";
	response.end();
}

exports.start = start;
exports.upload = upload;