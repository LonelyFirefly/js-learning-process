"use strict";

// Write a function pow(x,n) that returns x in power n.
// Or, in other words, multiplies x by itself n times and returns the result.
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.

alert("Enter a number you want to exponentiate");
let x = prompt();
alert("Enter a power");
let n = prompt();

function pow(x, n) {
	if (x % 1 == 0 && n % 1 == 0 && x >= 1 && n >= 1) {
		return x ** n;
	} else {
		return alert("not working");
	}
}

alert(`Result is ${pow(x, n)}`);
