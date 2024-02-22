import "./App.css";
import { RecoilRoot } from "recoil";
import UserInput from "./components/UserInput";
import ParaDisplay from "./components/ParaDisplay";

function App() {
   return (
      <>
         <RecoilRoot>
            <UserInput />
            <ParaDisplay />
         </RecoilRoot>
      </>
   );
}

export default App;
