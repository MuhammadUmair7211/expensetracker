/* eslint-disable react/prop-types */
import React from "react";

export default function Select({
  id,
  label,
  name,
  value,
  onChange,
  error,
  options,
}) {
  return (
    <div className="input my-2">
      <label htmlFor="" className="d-block">
        {label}
      </label>
      <select
        onChange={onChange}
        id={id}
        className="w-100 my-2 py-1"
        name={name}
        value={value}
      >
        <option value="" hidden>
          Select Category
        </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="text-danger">{error}</p>
    </div>
  );
}
