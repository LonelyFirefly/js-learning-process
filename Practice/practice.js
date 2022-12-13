"use strict";

// function printList(list) {
// 	if (list.next) {
// 		printList(list.next); // делаем то же самое для остальной части списка
// 	}

// 	alert(list.value); // выводим текущий элемент
// }

function printList(list) {
	let temporaryVariable = list;
	let arr = [];

	while (temporaryVariable) {
		arr.push(temporaryVariable.value);
		temporaryVariable = temporaryVariable.next;
	}

	for (let index = arr.length - 1; 0 <= index; index--) {
		alert(arr[index]);
	}
}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

printList(list);
