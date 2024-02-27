"use strict";
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Kalpesh");
// Sum function - how to assign return value to function
function sum(a, b) {
    const result = a + b > 100;
    return result;
}
console.log(sum(4, 500));
// Create a function that takes another function as input and runs after one second
function runAfterDelay(fn) {
    setTimeout(fn, 2000);
}
// runAfterDelay(function () {
//    console.log("Hello");
// });
runAfterDelay(() => console.log(sum(4, 5)));
