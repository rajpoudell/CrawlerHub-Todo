// components/TodoList.js
import React from "react";

const TodoList = ({ todos}) => {

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
                    // onClick={() => update(todo.id)}
                    className="action-btn update-btn"
                  >
                    Update
                  </button>
                  <button
                    // onClick={() => deleteTodo(todo.id)}
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
    </div>
  );
};

export default TodoList;