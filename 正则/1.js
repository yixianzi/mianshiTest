const string = "index.js";

const s = string.replace(/\.(.*)?$/, "").replace(/index$/, "");

console.log(s);
