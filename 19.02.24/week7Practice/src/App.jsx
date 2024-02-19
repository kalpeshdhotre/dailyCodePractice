import React, { memo, useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import AppBar from "./components/AppBar";

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

// const AppBar = memo(() => {
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

export default App;
