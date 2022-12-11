"use strict";

let studentLearningJson = {
	name: "John",
	age: 30,
	isAdmin: false,
	courses: ["html", "css", "js"],
	wife: null,
};

let json = JSON.stringify(studentLearningJson);

alert(typeof json);

alert(json);
