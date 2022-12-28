"use strict";

function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;

	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Fuck ${src})`));

	document.body.append(script);
}

// let loadScriptPromise = function (src) {
// 	return new Promise((resolve, reject) => {
// 		loadScript(src, (error, script) => {
// 			if (error) reject(error);
// 			else resolve(script);
// 		});
// 	});
// };

function promisify(f, severalArgs = false) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			function callback(error, ...results) {
				if (error) {
					reject(error);
				} else {
					resolve(severalArgs ? results : results[0]);
				}
			}

			args.push(callback);

			f.call(this, ...args);
		});
	};
}

let loadScriptPromise = promisify(loadScript, true);
loadScriptPromise("path/script.js");
