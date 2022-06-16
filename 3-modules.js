//CommomJS, every file is module (by default)
//Modules - Encapsulted code (only shared minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");

console.log(data);

sayHi("Mickey");
sayHi(names.ayush);
sayHi(names.kumar);
