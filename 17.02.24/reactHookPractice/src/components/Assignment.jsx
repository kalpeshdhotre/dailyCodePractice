import React, { useMemo, useState } from "react";
const words = ["Hi", "there", "Singapore", "Hello", "trekking", "coding", "no", "challenge"];

const dbLength = 5;
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
export function Assignment() {
   const [senArray, setsenArray] = useState(dbArray);
   const [filter, setfilter] = useState("");

   let dbToDisplay = [];

   const applyFilter = (e) => {
      console.log("filterd");
      setfilter(e.target.value);
   };

   useMemo(() => {
      console.log("useMemo called");

      dbToDisplay = senArray.filter((x) => x.includes(filter));
      console.log(dbToDisplay);
   }, [filter]);

   //    useMemo(() => {}, [filter, senArray]);

   return (
      <div>
         <h1>Assignment</h1>
         <input type="text" onChange={applyFilter} size={50} />
         {dbToDisplay.map((sent, index) => (
            <h3 key={index}>{sent}</h3>
         ))}
      </div>
   );
}
