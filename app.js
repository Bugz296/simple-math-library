const _mathLib = require('./mathlib');
const Math = new _mathLib();
console.log("2+3 = ", Math.add(2,3));
console.log("2x3 = ", Math.multiply(2,3));
console.log("3\u00B2 = ", Math.square(3));
console.log("Random Number (min = 2),(max = 10) = ", Math.random(2,10));