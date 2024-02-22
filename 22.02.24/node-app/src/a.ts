// let x: number = 1;

// x = "kalpesh";
// console.log(x);

// //===================================
// function greet(name: any) {
//     console.log("hello" + name);
// }

// greet("kalpesh");

//===================================
// TYPE INFERENCE
//===================================

// function sum(a: number, b: number): number {
//    return a + b;
// }

// const value = sum(1, 2);
// console.log(value);

// //===================================
// function islegal(age: number) {
//     if (age > 18) {
//         return true;
//     } else {
//       return false;
//     }
// }

// console.log(islegal(3));

//===================================
// mention type os Function which is argument to other function
//===================================

// function runafter1s(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// runafter1s(function () {
//     console.log("hi there");
// });

//===================================
// TSConfig file - rootdir & outdir setting in tsconfig.json
//===================================

//===================================
// noimplicitAny ::/* Enable error reporting for expressions and declarations with an implied 'any' type. */ like function below can have integer and string
// when there is huge code base migrating from JS to TS we can keep this option false and then turn to true
//===================================
// const greet = (name: string) => `Hello, ${name}!`;

//===================================
// Remove comment : true /false
//===================================

//===================================
// Interfaces
// types to object : mentioing same in functions at diffrent types will be repatative job which violet DRY rule, therefore we declare type of object once as folows syntax as below
// interface User{
//     firstName: string
//     lastName: string
//     age: number
// }
//
// and now this User type can be used in function at many places

//===================================

function isLegal(user: User) {
   if (user.age > 18) {
      return true;
   } else {
      return false;
   }
}

// WE can also mention optional field in Object with suffix ? which mention - optional field
// like
// email? : string;

// we can implement class from interface toderive class also
// syntax is "Class employee implements Person"

// Types are same as interface only "=" in syntax/
// we cannot derive class from types
// additional features of types are UNIONS / INTERSECTION
