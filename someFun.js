// Passing function around

function say(word){
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello");

/*
function execute(someFunction, value){
	someFunction(value);
}

execute(function(word){console.log(word)}, "Hello");

here we dont even give the function a name, which is why it is called "Anonymous Function".
this is the glimps of "Advance" javaScript.

In JS , We can pass a fuction as a parameter when calling another function. we can do this by assigning our
function to a variable, which we then pass, or by defining the function to pass-in-place
