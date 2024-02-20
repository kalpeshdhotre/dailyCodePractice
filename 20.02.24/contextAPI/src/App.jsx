import { useContext, useState } from "react";
import React from "react";
import { CountContext } from "./context";

function App() {
   const [count, setCount] = useState(0);

   return (
      // wrap anyone who wants to use the teleported value inside provider
      <>
         <CountContext.Provider value={{ count, setCount }}>
            <Count setCount={setCount} />
         </CountContext.Provider>
      </>
   );
}

function Count() {
   //
   return (
      <div>
         <Buttons />
         <br />
         <br />
         <CountRenderer />
      </div>
   );
}

function CountRenderer() {
   const { count } = useContext(CountContext);
   //  console.log(count);
   return <>Count is :{count}</>;
}

function Buttons() {
   const { count, setCount } = useContext(CountContext);
   return (
      <>
         <button
            onClick={() => {
               setCount(count + 1);
            }}
         >
            Increase
         </button>
         <button
            onClick={() => {
               setCount(count - 1);
            }}
         >
            Decrease
         </button>
      </>
   );
}
export default App;
