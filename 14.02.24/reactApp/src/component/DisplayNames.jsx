import React, { useEffect, useState } from "react";
import { Card } from "../app";

function DisplayNames({ namestodisplay }) {
   const [displayNames, setDisplayNames] = useState(namestodisplay);
   // console.log("array is", displayNames);

   // setDisplayNames(namestodisplay);

   useEffect(() => {
      setDisplayNames(namestodisplay);
   }, [namestodisplay]);

   const clearDisplay = () => {
      setDisplayNames([]);
   };

   const refershDisplay = () => {
      setDisplayNames(namestodisplay);
   };
   // console.log(displayNames);

   return (
      <div>
         <h1>Names in Database are as below :</h1>
         <button onClick={refershDisplay}>Refresh Data</button>
         <button onClick={clearDisplay}>Hide Data</button>

         {/* {displayNames.map((name, index) => (
            <h1 key={index}>Entered Name is {name}</h1>
         ))} */}

         {displayNames.map((name) => (
            <Card>
               <h1>Entered Name is {name}</h1>
            </Card>
         ))}
      </div>
   );
}

export default DisplayNames;
