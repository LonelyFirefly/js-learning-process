"use strict";

const section = document.querySelector(".section__buttons");
section.addEventListener("click", function (e) {
	let targetItem = e.target;
	console.log(targetItem);
	if (targetItem.closest(".section__button")) {
		targetItem.closest(".section__button").classList.add("done");
		targetItem.innerHTML = "Clicked!";
	}
});

const buttonAdd = document.querySelector(".section__add");
const sectionButtonsBlock = document.querySelector(".section__buttons");
console.log(sectionButtonsBlock);
buttonAdd.addEventListener("click", function (e) {
	sectionButtonsBlock.insertAdjacentHTML(
		"beforeend",
		`<button type="button" class="section__button">Click me (new)</button>`
	);
});
