"use strict";

function f(a) {
	alert(a);
}

function throttle(f, ms) {
	let count = 0;
	count++;
	let countSum = [];
	countSum.push(count);
	let isCoolDown = false;
	return function () {
		if (isCoolDown) return;
		f.apply(this, arguments);
		isCoolDown = true;
		setTimeout(() => (setTimeout = false), ms);
	};
	return f.apply(this, arguments);
}

let f1000 = throttle(f, 1000);
f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
