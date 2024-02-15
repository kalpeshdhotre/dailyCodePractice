const names = ["Kalpesh", "Kalpita", "Kshiprra"];
const newName = ["Kavita", "Prathamesh"];

const finalArray = [...names, ...newName];

console.log(finalArray);
console.log(names);

const newArray = names.map((names, index) => {
   return `Location is ${index} ` + names.toUpperCase();
});

console.log(newArray);
