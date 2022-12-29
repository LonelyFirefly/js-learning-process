"use strict";

class Clock {
	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = `0${hours} `;

		let minutes = date.getMinutes();
		if (minutes < 10) minutes = `0${minutes} `;

		let seconds = date.getSeconds();
		if (seconds < 10) seconds = `0${seconds} `;

		let output = this.template
			.replace("h", hours)
			.replace("m", minutes)
			.replace("s", seconds);
		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

// let clock = new Clock({
// 	template: "h:m:s",
// });
// clock.start();
