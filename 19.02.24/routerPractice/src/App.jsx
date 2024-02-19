import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "../../week7Practice/src/components/Dashboard";
import Landing from "../../week7Practice/src/components/Landing";

function App() {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<Landing />} />
               <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
