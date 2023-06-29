const fs = require("fs");

fs.mkdirSync("lib");
fs.mkdirSync("lib/lib");
fs.closeSync(fs.openSync("lib/lib/napi-module.js", 'w'));