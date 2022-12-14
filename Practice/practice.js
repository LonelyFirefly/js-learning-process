"use strict";

function makeCounter() {
	let count = 0;

	return function () {
		return count++;
	};
}

let counter = makeCounter();
let count = 10;
alert(counter());
alert(counter());
alert(counter());
