function greet(name: string) {
   console.log(`Hello ${name}`);
}

greet("Kalpesh");

// Sum function - how to assign return value to function

function sum(a: number, b: number): boolean {
   const result = a + b > 100;
   return result;
}

console.log(sum(4, 500));

// Create a function that takes another function as input and runs after one second

function runAfterDelay(fn: () => void) {
   setTimeout(fn, 2000);
}

// runAfterDelay(function () {
//    console.log("Hello");
// });

runAfterDelay(() => console.log(sum(4, 5)));
