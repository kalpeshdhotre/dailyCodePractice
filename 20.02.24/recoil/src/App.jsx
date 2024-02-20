import React from "react";
import { useContext, useState } from "react";
import { CountContext } from "./context";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
   return (
      <>
         <RecoilRoot>
            <Count />
         </RecoilRoot>
      </>
   );
}

function Count() {
   return (
      <div>
         <CountRenderer />
         <Buttons />
      </div>
   );
}

function CountRenderer() {
   const count = useRecoilValue(countAtom);

   return (
      <div>
         <h1>Count is : {count}</h1>
      </div>
   );
}

function Buttons() {
   const [count, setCount] = useRecoilState(countAtom);
   return (
      <div>
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
      </div>
   );
}

export default App;
