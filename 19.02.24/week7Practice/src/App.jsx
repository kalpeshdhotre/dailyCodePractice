import { memo, useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
   return (
      <>
         <BrowserRouter>
            <AppBar />
            <Routes>
               <Route path="/Dashboard" element={<Dashboard />} />
               <Route path="/" element={<Landing />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

// const AppBar = React.memo(() => {
//    const navigate = useNavigate();
//    console.log("appbar rendering" + Math.random());
//    return (
//       <div>
//          <button
//             onClick={() => {
//                navigate("/");
//             }}
//          >
//             Home Page
//          </button>
//          <button
//             onClick={() => {
//                navigate("/Dashboard");
//             }}
//          >
//             Dashboard
//          </button>
//       </div>
//    );
// });

function AppBar() {
   const navigate = useNavigate();

   const handleNavigateToHomePage = useCallback(() => {
      navigate("/");
   }, [navigate]);

   const handleNavigateToDashboard = useCallback(() => {
      navigate("/Dashboard");
   }, [navigate]);

   console.log("appbar rendering");

   return (
      <div>
         <button onClick={handleNavigateToHomePage}>Home Page</button>
         <button onClick={handleNavigateToDashboard}>Dashboard</button>
      </div>
   );
}
export default App;
