"use strict";

function defer(f, ms) {
	return function (...args) {
		let context = this;
		setTimeout(function () {
			return f.apply(context, args);
		}, ms);
	};
}

function sayHi(name) {
	alert(` Hi ${name}`);
}

let sayhiDeferred = defer(sayHi, 500);
sayhiDeferred("Dan");
