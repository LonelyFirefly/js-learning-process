"use strict";

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let Calculator = calculate(str) {
	str = str.split(" ");
	return +str[0] + +str[2];
}

function addMethod(operatorFromString, func) {
	operatorFromString = {
		"+": (a, b) => a + b,
		"/": (a, b) => a / b,
		"*": (a, b) => a * b,
		"**": (a, b) => a ** b,
	};
}

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
