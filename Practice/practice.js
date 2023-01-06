"use strict";

function positionAt(anchor, position, elem) {
	let anchorCoords = elem.getBoundingClientRect();

	switch (position) {
		case "top":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
			break;

		case "right":
			elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
			elem.style.top = anchorCoords.top + "px";
			break;

		case "bottom":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
			break;
	}
}

function showNote(anchor, position, html) {
	let note = document.createElement("div");
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
