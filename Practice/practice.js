"use strict";

let list = document.createElement("ul");
document.body.append(list);

while (true) {
	let data = prompt("content?");

	if (!data) {
		break;
	}

	let li = document.createElement("li");
	li.textContent = data;
	list.append(li);
}
