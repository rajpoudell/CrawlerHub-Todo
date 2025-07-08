// components/TodoForm.js
import React, { useState } from "react";

const TodoForm = () => {
  const [form, setForm] = useState({ fullName: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.email) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Invalid email format";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      const newEntry = { ...form, id: Date.now() };
      const existingEntries =
        JSON.parse(localStorage.getItem("formEntries")) || [];
      const updatedEntries = [...existingEntries, newEntry];

      localStorage.setItem("formEntries", JSON.stringify(updatedEntries));
      // addTodo(form);
      setForm({ fullName: "", email: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
    setErrors(errs);
  };

  return (
    <div className="todo-form-container">
      <div className="todo-form">
        <h2 className="form-title">Add New Todo</h2>
        {isSubmitted && (
          <div className="success-message">Todo added successfully!</div>
        )}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
