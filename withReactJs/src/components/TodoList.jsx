// components/TodoList.js
import React, { useState } from "react";
import { validate } from "../utils/validation";

const TodoList = ({ todos, deleteTodo, setTodos }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [errors, setErrors] = useState({});

  const handleUpdate = (id) => {
    const selected = todos.find((todo) => todo.id === id);
    if (selected) {
      setCurrentTodo(selected);
      setShowUpdateForm(true);
    }
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (!currentTodo) return;
    const validationErrors = validate(currentTodo);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? currentTodo : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("formEntries", JSON.stringify(updatedTodos));
    setShowUpdateForm(false);
    setCurrentTodo(null);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h2 className="list-title">Your Todos</h2>
        {todos.length === 0 ? (
          <p className="empty-message">No todo yet. Add one above!</p>
        ) : (
          <ul className="list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? "completed" : ""}`}
              >
                <div className="todo-content">
                  <span className="todo-name">{todo.fullName}</span>
                  <span className="todo-email">{todo.email}</span>
                </div>
                <div className="todo-actions">
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="action-btn update-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="action-btn delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* when click true this showsup  */}
      {showUpdateForm && currentTodo && (
        <form
          className={`update-form ${showUpdateForm ? "show" : ""}`}
          onSubmit={handleSubmitUpdate}
        >
          <div className="update-form-group">
            <input
              type="text"
              placeholder="Full Name"
              value={currentTodo.fullName}
              onChange={(e) =>
                setCurrentTodo({ ...currentTodo, fullName: e.target.value })
              }
            />
          </div>
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <div className="update-form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={currentTodo.email}
              onChange={(e) =>
                setCurrentTodo({ ...currentTodo, email: e.target.value })
              }
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="btn-group">
            <button type="submit" className="submit-btn">
              Update
            </button>
            <button
              type="button"
              className="close-btn"
              onClick={() => {
                setShowUpdateForm(false);
                setCurrentTodo(null);
              }}
            >
              Close
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TodoList;
