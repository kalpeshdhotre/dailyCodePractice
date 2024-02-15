import { useRef } from "preact/hooks";
import React, { useState } from "react";

function AddName({ names, setNames }) {
   const [fName, setfName] = useState(names);
   const inputRef = useRef(null);

   const handleChange = (e) => {
      setfName(e.target.value);
   };

   const handleSubmit = (e) => {
      //   e.preventDefault();asd
      //   if (name.trim() === "") return;
      // setName(e.target.value);
      setNames([...names, fName]);
      setfName("");

      // const input = document.getElementById("myInput");
      // input.value = "";
      // console.log(fName);
      // console.log(names);
      inputRef.current.focus();
   };
   return (
      <div>
         <h1>Enter Details Below</h1>

         <input id="myInput" onChange={handleChange} type="text" title="Enter Name" value={fName} ref={inputRef} />

         <button onClick={handleSubmit}>SAVE</button>
      </div>
   );
}

export default AddName;
