"use strict";
// Interfaces in TS
const user = {
    firstName: "Kalpesh",
    lastName: "Dhotre",
    phoneNumber: 9819,
    age: 21,
};
function isLegal(data) {
    return data.age >= 18 ? true : false;
}
console.log(isLegal(user));
