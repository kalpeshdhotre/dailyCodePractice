import { useState } from "preact/hooks";
import React from "react";

function AddName({ onAddName }) {
   const [name, setName] = useState("");

   const handleChange = (e) => {
      setName(e.target.value);
   };

   const handleSubmit = (e) => {
      //   e.preventDefault();asd
      //   if (name.trim() === "") return;
      setName(e.target.value);
      onAddName(name);
      setName("");
   };
   return (
      <div>
         <h1>Enter Details Below</h1>
         <form action="">
            <input onChange={handleChange} type="text" title="Enter Name" />
         </form>
         <button onClick={handleSubmit}>SAVE</button>
      </div>
   );
}

export default AddName;
