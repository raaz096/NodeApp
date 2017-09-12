//Right Now for my own use only Read 
var fs = require(‘fs’);
fs.readFile(__filename, {
encoding: ‘utf8’
}, function(error, data) {
if (error) {
return console.error(error.message);
}
console.log(data);
});

//Write File

var fs = require(‘fs’);
var data = ‘some file data’;
fs.writeFile(__dirname + ‘/foo.txt’, data, function(error) {
if (error) {
return console.error(error.message);
}
});
