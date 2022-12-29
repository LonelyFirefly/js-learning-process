"use strict";

let { User } = await import("../auth/index.js");
let user = new User("Dan");

alert(user.name);
