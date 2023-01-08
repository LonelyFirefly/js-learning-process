"use strict";

let i = 1;
for (let li of document.querySelectorAll("li")) {
	li.style.position = "relative";
	li.insertAdjacentHTML(
		"beforeend",
		`<span style="position:absolute;left:0;top:0">${i}</span>`
	);
	i++;
}

let list = document.querySelectorAll("li");
let arrowRight = document.querySelector(".arrow__right");
let arrowLeft = document.querySelector(".arrow__left");
console.log(list);
list.forEach((element) => {
	arrowRight.addEventListener("click", () => {
		element.style.transform = "translateX(40px)";
	});
	arrowLeft.addEventListener("click", () => {
		element.style.transform = "translateX(-40px)";
	});
});
