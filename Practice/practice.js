"use strict";

function f() {
	alert(this.name);
}

f = f.bind({ name: "Dan" });
f.bind({ name: "Leo" });

f();
