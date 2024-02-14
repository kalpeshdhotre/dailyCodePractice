import { useState } from "preact/hooks";
import React from "react";

function Counter() {
   const [count, setCount] = useState(0);
   function increase() {
      setCount(count + 1);
   }

   function decrease() {
      setCount(count - 1);
   }

   return (
      <div>
         <h1>Counter is {count}</h1>
         <button onClick={increase}>Increment</button>
         <button onClick={decrease}>Decrease</button>
      </div>
   );
}

export default Counter;
