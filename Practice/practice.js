"use strict";

class CoffeeMachine {
	_waterAmount = 0;

	constructor(power) {
		this.power = power;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	set waterAmount(value) {
		if (value < 0) throw new Error("Negative amount of water");
		this._waterAmount = value;
	}
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -200;
