// App.js
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //for getting todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("formEntries")) || [];
    setTodos(storedTodos);
  }, []);


  const addTodo = (newTodo) => {
    const newEntry = { ...newTodo, id: Date.now() };
    const updatedTodos = [...todos, newEntry];
    setTodos(updatedTodos);
    localStorage.setItem("formEntries", JSON.stringify(updatedTodos));
  };
  const deleteTodo = (id) => {
    
    setTodos(todos.filter((todo) => todo.id !== id));

  }
  return (
    <div className="app-container">
      <h1 className="app-title text-brown">Welcome to my Todo List</h1>
      <div className="todo-app">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
