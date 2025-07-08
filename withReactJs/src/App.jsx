// App.js
import React, {  useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  const[todos, setTodos] = useState([]);
  console.log();
  
  useEffect(() => {
    console.log(todos);
    setTodos(  JSON.parse(localStorage.getItem("formEntries")) || []);
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title text-brown">Welcome to my Todo List</h1>
      <div className="todo-app">
        <TodoForm  />
        <TodoList
          todos={todos}
          
        />
      </div>
    </div>
  );
}

export default App;