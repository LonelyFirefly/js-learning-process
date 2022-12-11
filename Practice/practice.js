"use strict";

let room = {
	number: 23,
};

let meetup = {
	title: "Совещание",
	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
	place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

JSON.stringify(meetup, function replacer(key, value) {
	if (value == meetup) {
		delete meetup.key;
	} else {
		return value;
	}
});
