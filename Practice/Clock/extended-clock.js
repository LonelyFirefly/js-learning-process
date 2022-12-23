"use strict";

class ExtendedClock extends Clock {
	constructor({ template, precision }) {
		super(precision);
		this.template = template;
	}

	start() {
		super.start.timer = setInterval(() => this.render(), this.precision);
	}
}

let lowResolutionCLock = new ExtendedClock({
	template: "h:m:s",
	precision: 1000,
});

lowResolutionCLock.start();
