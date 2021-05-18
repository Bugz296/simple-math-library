const mathlib = require('./mathlib')();
console.log("2+3 = ", mathlib.add(2,3));
console.log("2x3 = ", mathlib.multiply(2,3));
console.log("3\u00B2 = ", mathlib.square(3));
console.log("Random Number (min = 2),(max = 10) = ", mathlib.random(2,10));