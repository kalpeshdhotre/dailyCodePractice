import React from "react";
import { useState } from "react";

import MyName from "./component/MyName";

// import "./App.css";

function App() {
   const [myName, setMyName] = useState("Kalpesh");

   function generateName() {
      setMyName("My name is " + Math.random());
   }

   return (
      <div>
         <button onClick={generateName}>Change Name</button>
         <MyName title={myName} />
         <br />
         <MyName title="name 1" />
         <MyName title="name 2" />
         <MyName title="name 3" />
         <MyName title="name 3" />
         <MyName title="name 3" />
         <MyName title="name 3" />
      </div>
   );
}

export default App;
