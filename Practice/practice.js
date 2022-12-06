"use strict";

let options = {
	title: "Menu",
	width: 100,
	height: 200,
};

let { title, ...rest } = options;

alert(rest.width);
alert(rest.height);
