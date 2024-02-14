import React, { useEffect, useState } from "react";

function DisplayNames({ names }) {
   const [displayNames, setDisplayNames] = useState(names);
   // setDisplayNames(names);

   useEffect(() => {
      setDisplayNames(names);
   }, [names]);

   const clearDisplay = () => {
      setDisplayNames([]);
   };

   const refershDisplay = () => {
      setDisplayNames(names);
   };

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
