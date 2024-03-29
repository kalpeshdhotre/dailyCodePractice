import React, { useState } from "react";
import "./app.css";
import Counter from "./component/CounterCard";
import AddName from "./component/AddName";
import DisplayNames from "./component/DisplayNames";

export function App() {
   const [names, setNames] = useState([]);
   // setNames([1, 2, 3, 4, 5]);

   //  const addName = (newName) => {
   //     setNames([...names, newName]);
   //  };

   return (
      <>
         {/* <AddName onAddName /> */}
         <AddName names={names} setNames={setNames} />

         <DisplayNames namestodisplay={names} />
      </>
   );
}

export function Card({ children }) {
   return (
      <div
         style={{
            border: "1px solid grey",
            padding: "5px",
            width: "200px",
            textAlign: "center",
            margin: "15px",
            backgroundColor: "grey",
         }}
      >
         {children}
      </div>
   );
}
