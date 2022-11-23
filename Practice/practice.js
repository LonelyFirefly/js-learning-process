"use strict";

function truncate(str, maxLength) {
	if (str.length > maxLength) {
		str.slice(maxLength) = "...";
	}
    return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

alert(truncate("Всем привет!", 20));
