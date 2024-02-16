import React from "react";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { Axios } from "axios";

function App() {
   const [todos, setTodos] = useState(1);

   //  useEffect(() => {
   //     axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
   //        setTodos(response.data.todos);
   //     });
   //  }, []);

   //  let todoID = 1;

   const setId = (e) => {
      const buttonValue = e.target.value;
      setTodos(buttonValue);
      // console.log(todos);
   };
   return (
      <>
         <button onClick={setId} value={1}>
            1
         </button>
         <button onClick={setId} value={2}>
            2
         </button>
         <button onClick={setId} value={3}>
            3
         </button>
         <button onClick={setId} value={4}>
            4
         </button>
         <Todo id={todos} />
      </>
   );
}

function Todo({ id }) {
   const [todo, setTodo] = useState({});
   console.log(id);

   useEffect(() => {
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((response) => {
         setTodo(response.data.todo);
      });
   }, [id]);

   return (
      <div>
         <h1>{todo.title}</h1>
         <h3>{todo.description}</h3>
         <h3>{todo.id}</h3>
      </div>
   );
}
export default App;
