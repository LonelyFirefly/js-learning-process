"use strict";

let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
	fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests).then((responses) => {
	for (let response of responses) {
		alert(`${response.url}: ${response.status}`);
	}
	return responses;
}).then;
