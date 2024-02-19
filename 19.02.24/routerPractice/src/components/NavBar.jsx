import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
   const navigate = useNavigate();
   return (
      <div>
         <button onClick={() => navigate("/")}>HomePage</button>
         <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
      </div>
   );
}
