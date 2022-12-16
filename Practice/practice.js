"use strict";

let worker = {
	someMethod() {
		return 1;
	},

	slow(x) {
		alert(`Called with ${x}`);
		return x * this.someMethod();
	},
};

function cachingDecorator(func) {
	let cache = new Map();
	return function (x) {
		if (cache.has(x)) return cache.get(x);

		let result = func.call(this, x);
		cache.set(x, result);
		return result;
	};
}

worker.slow = cachingDecorator(worker.slow);
