import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface toDo {
   title: string;
   description: string;
   status: boolean;
}

interface toDoInput {
   todo: toDo;
}

function App() {
   const todoList: toDo = {
      title: "Fist todo",
      description: "Go cycyling",
      status: false,
   };

   return (
      <>
         <DisplayTodo todo={todoList} />
      </>
   );
}

function DisplayTodo({ todo }: toDoInput) {
   return (
      <div>
         <h1>{todo.title} </h1>
         <h2>{todo.description} </h2>
         <h3>{todo.status.toString()} </h3>
      </div>
   );
}

export default App;
