"use strict";

class FormatError extends SyntaxError {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
