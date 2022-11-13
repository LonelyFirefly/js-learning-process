"use strict";

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
