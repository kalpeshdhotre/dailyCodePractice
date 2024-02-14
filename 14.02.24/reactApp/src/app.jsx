import React, { useState } from "react";

import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Counter from "./component/CounterCard";
import AddName from "./component/AddName";
import DisplayNames from "./component/DisplayNames";

export function App() {
   //  const [count, setCount] = useState(0);
   const [names, setNames] = useState([]);

   //  const addName = (newName) => {
   //     setNames([...names, newName]);
   //  };

   function addName(newName) {
      setNames([...names, newName]);
   }

   return (
      <>
         {/* <AddName onAddName /> */}
         <AddName onAddName={addName} />
         <DisplayNames names={names} />
      </>
   );
}
