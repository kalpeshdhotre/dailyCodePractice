import { useState } from "react";
import { Assignment } from "./components/Assignment";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Assignment />
      </>
   );
}

export default App;
