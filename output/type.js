"use strict";
// Array as lists;
let arr = [];
let arr2 = [];
// array as tuples;
let point = [2, 3];
// const entries = Object.entries({ name: "Zubayer", age: 19 });
// console.log(entries);
function stringify123(callback) {
    return callback(123);
}
function makeAllPersonAdult(p) {
    return Object.assign(Object.assign({}, p), { adult: true });
}
console.log(makeAllPersonAdult({ name: "Zubayer", age: 19, adult: false }));
