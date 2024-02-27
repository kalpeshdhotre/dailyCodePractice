// Interfaces in TS

const user = {
   firstName: "Kalpesh",
   lastName: "Dhotre",
   phoneNumber: 9819,
   age: 21,
};

interface User {
   firstName: string;
   lastName: string;
   phoneNumber: number;
   age: number;
}

function isLegal(data: User): boolean {
   return data.age >= 18 ? true : false;
}

console.log(isLegal(user));
