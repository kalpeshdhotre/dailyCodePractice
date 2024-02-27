"use strict";
// const a: number = 1;
// let fName: string = "kalpesh";
// console.log(a);
// console.log(fName);
// function greet(fName: string) {
//    console.log("Hello " + fName);
// }
// greet("Kalpesh");
// function sum(a: number, b: number): number {
//    return a + b;
// }
// console.log(sum(2, 3));
function isLegal(age) {
    if (age >= 18) {
        console.log("Legal to drive");
        return true;
    }
    return false;
}
// console.log(isLegal(21));
function runAfterDelay(fn) {
    setTimeout(fn, 10000);
}
runAfterDelay(() => isLegal(34));
