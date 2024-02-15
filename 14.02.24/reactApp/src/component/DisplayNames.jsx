import React, { useEffect, useState } from "react";

function DisplayNames({ namestodisplay }) {
   const [displayNames, setDisplayNames] = useState([]);
   // setDisplayNames(names);

   useEffect(() => {
      setDisplayNames(namestodisplay);
   }, [namestodisplay]);

   const clearDisplay = () => {
      setDisplayNames([]);
   };

   const refershDisplay = () => {
      setDisplayNames(namestodisplay);
   };
   console.log(namestodisplay);

   return (
      <div>
         <h1>Names in Database are as below :</h1>
         <button onClick={refershDisplay}>Refresh Data</button>
         <button onClick={clearDisplay}>Hide Data</button>
         <ul>
            {displayNames.map((uname, index) => (
               <li key={index}>{uname}</li>
            ))}
         </ul>
      </div>
   );
}

export default DisplayNames;
