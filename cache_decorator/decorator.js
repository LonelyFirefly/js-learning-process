"use strict";

let worker = {
	slow(min, max) {
		alert(`Called with ${min},${max}`);
		return min + max;
	},
};

//decorator
function cachingDecorator(func, hash) {
	let cache = new Map();

	return function () {
		let key = hash(arguments);
		if (cache.has(key)) {
			alert("Already in cache");
			return cache.get(key);
		} else {
			let result = func.call(this, ...arguments);
			cache.set(key, result);
			return result;
		}
	};
}

function hash(args) {
	return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5));
alert("Again" + worker.slow(3, 5));
