import React from "react";

const MyName = React.memo(function MyName({ title }) {
   return (
      <>
         <h1>My Name is {title}</h1>
      </>
   );
});

export default MyName;
