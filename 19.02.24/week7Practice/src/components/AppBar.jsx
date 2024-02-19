import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AppBar = memo(() => {
   const navigate = useNavigate();
   return (
      <div>
         <button
            onClick={() => {
               navigate("/");
            }}
         >
            Home Page
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
});

export default AppBar;
