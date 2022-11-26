"use strict";

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)
