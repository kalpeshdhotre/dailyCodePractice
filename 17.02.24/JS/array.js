const words = ["Hi", "there", "Singapore", "Hello", "trekking", "coding", "no", "challenge"];

const dbLength = 100;
const sentenseLength = 8;
const dbArray = [];
let sentense = "";

for (let i = 1; i <= dbLength; i++) {
   for (let j = 1; j <= sentenseLength; j++) {
      sentense = sentense + words[Math.floor(sentenseLength * Math.random())];
      sentense = sentense + " ";
   }
   dbArray.push(sentense);
   sentense = "";
}

console.log(dbArray);
