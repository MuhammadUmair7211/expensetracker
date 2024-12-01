import React from "react";

export default function Input({ id, label, name, value, onChange, error }) {
  return (
    <div className="input my-2">
      <label htmlFor={id} className="d-block">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="w-100"
        value={value}
        onChange={onChange}
        name={name}
      />
      <p className="text-danger">{error}</p>
    </div>
  );
}
