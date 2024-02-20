import React from "react";
import { useContext, useState } from "react";
import { CountContext } from "./context";
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
   return (
      <>
         <RecoilRoot>
            <Count />
            <EvenCountRenderer />
         </RecoilRoot>
      </>
   );
}

function Count() {
   console.log("render");
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

function EvenCountRenderer() {
   const isEven = useRecoilValue(evenSelector);
   console.log(isEven);

   return <div>{isEven == 0 ? "Number is even" : null} </div>;
}

function Buttons() {
   // const [count, setCount] = useRecoilState(countAtom);
   const setCount = useSetRecoilState(countAtom);
   console.log("Buttons not rendering");

   return (
      <div>
         <button
            onClick={() => {
               setCount((c) => c + 1);
            }}
         >
            Increase
         </button>
         <button
            onClick={() => {
               setCount((c) => c - 1);
            }}
         >
            Decrease
         </button>
      </div>
   );
}

export default App;
