import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Counter from "./component/CounterCard";

export function App() {
   //  const [count, setCount] = useState(0);

   return (
      <>
         {/* <h1>Counter is: {count} </h1>
         <button
            onClick={() => {
               if (count < 5) {
                  setCount(count + 1);
               }
            }}
         >
            Add to Count
         </button>
         <button
            onClick={() => {
               if (count != -5) setCount(count - 1);
            }}
         >
            Deduct from Count
         </button> */}

         <Counter />
         <Counter />
      </>
   );
}
