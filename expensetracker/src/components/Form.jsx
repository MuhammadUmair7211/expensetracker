import React from "react";

const Form = ({ setExpenses }) => {
  const handleForm = (e) => {
    e.preventDefault();
    const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    setExpenses((prevState) => [...prevState, expense]);
    e.target.reset();
  };

  const getFormData = (form) => {
    const formData = new FormData(form);
    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  };
  return (
    <div>
      <div className="container border">
        <form className="form" onSubmit={handleForm}>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Title
            </label>
            <input type="text" className="w-100" name="title" />
          </div>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Category
            </label>
            <select id="category" className="w-100 my-2 py-1" name="category">
              <option value="" hidden>
                Select Category
              </option>
              <option value="medicine">Medicine</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
              <option value="clothes">Clothes</option>
              <option value="grocery">Grocery</option>
              <option value="bills">Bills</option>
            </select>
          </div>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Amount
            </label>
            <input type="text" className="w-100" name="amount" />
          </div>
          <button className="btn btn-primary w-100 border-0 py-2 my-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
