"use strict";

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;
	Object.defineProperty(this, "age", {
		get() {
			let todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		},
		set(value) {
			this._age = value;
		},
	});
}

let john = new User("Dan", new Date(2002, 4, 9));
john.age = 23;
alert(john.age);
alert(john.birthday);
