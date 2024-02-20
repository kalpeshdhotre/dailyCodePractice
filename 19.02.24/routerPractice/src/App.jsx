import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";

// const NavBar = lazy(() => "./components/NavBar");
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
   return (
      <div>
         <BrowserRouter>
            <NavBar />

            <Routes>
               <Route
                  path="/Dashboard"
                  element={
                     <Suspense fallback={"Loading ..."}>
                        <Dashboard />
                     </Suspense>
                  }
               />
               <Route
                  path="/"
                  element={
                     <Suspense fallback={"loading ...."}>
                        <Landing />
                     </Suspense>
                  }
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

// function NavBar() {
//    const navigate = useNavigate();
//    return (
//       <div>
//          <button onClick={() => navigate("/")}>HomePage</button>
//          <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
//       </div>
//    );
// }

export default App;
