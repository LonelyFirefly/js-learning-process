"use strict";

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
	for (const key in menu) {
		if (typeof menu[key] == "number") menu[key] *= 2;
	}
}

alert(menu.width);
alert(menu.height);
alert(menu.title);
