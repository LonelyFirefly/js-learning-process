"use strict";

function getMaxSubSum(array) {
	let maxSum = 0;
	let partialSum = 0;

	for (let index = 0; index < array.length; index++) {
		partialSum += array[index];
		if (partialSum < 0) partialSum = 0;
		maxSum = Math.max(partialSum, maxSum);
	}
	alert(maxSum);
}

getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([100, -9, 2, -3, 5]); // 100
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([-1, -2, -3]); // 0
