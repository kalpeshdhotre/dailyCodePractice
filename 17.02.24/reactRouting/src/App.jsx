import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Appbar />
            <Routes>
               <Route path="/Dashboard" element={<Dashboard />} />
               <Route path="/" element={<Landing />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

function Appbar() {
   const navigate = useNavigate();
   // component routing
   return (
      <div>
         <button
            onClick={() => {
               navigate("/");
            }}
         >
            Landing Page
         </button>
         <button
            onClick={() => {
               navigate("/Dashboard");
            }}
         >
            Dashboard
         </button>
      </div>
   );
}
export default App;
