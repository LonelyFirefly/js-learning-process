"use strict";

function showNotification({ top, right, html, className }) {
	let notification = document.createElement("div");
	notification.classList.add("notification");
	notification.style.top = top + "px";
	notification.style.right = right + "px";
	notification.innerHTML = html;
	notification.classList.add(className);
	document.body.append(notification);
	setTimeout(() => {
		notification.remove();
	}, 1500);
}

showNotification();
