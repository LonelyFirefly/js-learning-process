"use strict";

function loadJson(url) {
	return fetch(url).then((response) => response.json);
}

function loadGithubUser(name) {
	return fetch(`https://api.github.com/users/${name}`).then((response) =>
		response.json()
	);
}

function showAvatar(githubUser) {
	return new Promise(function (resolve, reject) {
		let img = document.createElement("img");
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		document.body.append(img);

		setTimeout(() => {
			img.remove();
			resolve(githubUser);
		}, 3000);
	});
}

loadJson("/article/promise-chaining/user.json").then((user) =>
	loadGithubUser(user.name)
		.then(showAvatar)
		.then((githubUser) => alert(`End ${githubUser.name}`))
);
