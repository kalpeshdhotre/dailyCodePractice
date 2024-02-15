import React, { useState } from "react";

function AddName({ names, setNames }) {
   const [fName, setfName] = useState(names);

   const handleChange = (e) => {
      setfName(e.target.value);
   };

   const handleSubmit = (e) => {
      //   e.preventDefault();asd
      //   if (name.trim() === "") return;
      // setName(e.target.value);
      setNames([...names, fName]);
      setfName("");
      // console.log(fName);
      // console.log(names);
   };
   return (
      <div>
         <h1>Enter Details Below</h1>

         <input onChange={handleChange} type="text" title="Enter Name" />

         <button onClick={handleSubmit}>SAVE</button>
      </div>
   );
}

export default AddName;
