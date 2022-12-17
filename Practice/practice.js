"use strict";

function work(a, b) {
	alert(a + b);
}

function spy(func) {
	return function wrapper(a, b) {
		wrapper.calls = [];
		wrapper.calls = func(a, b);

		return wrapper.calls;
	};
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
	alert("call:" + args.join()); // "call:1,2", "call:4,5"
}
