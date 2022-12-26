"use strict";

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

function readUser(json) {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new ValidationError("Field is missing: name");
	}
	if (!user.age) {
		throw new ValidationError("Field is missing: age");
	}
	return user;
}

try {
	let user = readUser('{ "age": 25 }');
} catch (error) {
	if (error instanceof ValidationError) {
		alert(`Invalid data: ${error.message}`);
	} else if (error instanceof SyntaxError) {
		alert(`JSON Syntax error: ${error.message}`);
	} else {
		throw error;
	}
}
