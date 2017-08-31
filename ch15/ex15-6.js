const before = { d: new Date().valueOf() };
typeof before.d			// "number"
const json = JSON.stringify(before);
const after = JSON.parse(json);
typeof after.d			// "number"
const d = new Date(after.d);
