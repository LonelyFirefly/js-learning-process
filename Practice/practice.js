"use strict";

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function topSalary(salaries) {
	let max = 0;
	let MaxName = null;
	for (const [name, salary] of Object.entries(salaries)) {
		if (salary > max) {
			max = salary;
			MaxName = name;
		}
	}
	alert(MaxName);
}

topSalary(salaries);

// alert(Object.entries(salaries));
