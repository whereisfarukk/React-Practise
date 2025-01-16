import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container" aria-label="form">
      <div className="form-group">
        <label htmlFor="roll" className="form-label">
          Roll:
        </label>
        <input
          type="text"
          id="roll"
          name="roll"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}
