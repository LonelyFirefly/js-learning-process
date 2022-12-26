"use strict";
//(*) MyError helps not to write this.name = "..." in a class constructor every time we create new class
class MyError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name; //(*)
	}
}

class ReadError extends MyError {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
	}
}

class ValidationError extends MyError {
	constructor(message) {
		super(message);
	}
}

class PropertyRequiredError extends ValidationError {
	constructor(property) {
		super(`Property missing: ${property}`);
		this.property = property;
	}
}

function validateUser(user) {
	if (!user.name) {
		throw new ValidationError("name");
	}
	if (!user.age) {
		throw new ValidationError("age");
	}
}

function readUser(json) {
	let user;
	try {
		user = JSON.parse(json);
	} catch (error) {
		if (error instanceof SyntaxError) {
			throw new ReadError("Syntax Error", error);
		} else {
			throw error;
		}
	}

	try {
		validateUser();
	} catch (error) {
		if (error instanceof ValidationError) {
			throw new ReadError("Validation Error", error);
		} else {
			throw error;
		}
	}
}

try {
	readUser("{bad json}");
} catch (error) {
	if (error instanceof ReadError) {
		alert(error);
		alert(`Initial error ${error.cause}`);
	} else {
		throw error;
	}
}
