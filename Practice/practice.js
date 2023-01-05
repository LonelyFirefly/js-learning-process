"use strict";

let field = document.getElementById("field");

let fieldCoordinates = field.getBoundingClientRect();
console.log(fieldCoordinates);

console.log(fieldCoordinates.right, fieldCoordinates.bottom);
console.log(fieldCoordinates.left, fieldCoordinates.top);
console.log(
	fieldCoordinates.right - field.clientLeft,
	fieldCoordinates.bottom - field.clientTop
);
console.log(
	fieldCoordinates.x + field.clientLeft,
	fieldCoordinates.y + field.clientTop
);
