import { useState, memo, useCallback } from "react";

function App() {
   const [count, setCount] = useState(0);

   const inputFunction = useCallback(() => {
      console.log("Hi There");
   }, []);

   return (
      <>
         <h1>Hello Good Morning!!</h1>
         <ButtonComponent inputFunction={inputFunction} />
         <br />
         <button
            onClick={() => {
               setCount(count + 1);
            }}
         >
            Counter {count}{" "}
         </button>
      </>
   );
}

const ButtonComponent = memo((inputFunction) => {
   console.log("Child render");

   return (
      <div>
         <button>Button Clicked</button>
      </div>
   );
});

export default App;
