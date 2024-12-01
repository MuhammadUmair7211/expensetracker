import React, { useState } from "react";
const Form = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    const validateExpense = validate(expense);
    if (Object.keys(validateExpense).length != "") {
      return;
    }
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    // setTitle("");
    // setCategory("");
    // setAmount("");
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // e.target.reset();

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  const [errors, setErrors] = useState({});
  const validate = (formData) => {
    let errorsData = {};
    if (formData.title === "") {
      errorsData.title = "*title is required!";
    }
    if (formData.category === "") {
      errorsData.category = "*please select a category!";
    }
    if (formData.amount === "") {
      errorsData.amount = "*amount is required!";
    }
    setErrors(errorsData);
    return errorsData;
  };
  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   let data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <div>
      <div className="container border">
        <form className="form" onSubmit={handleForm}>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Title
            </label>
            <input
              type="text"
              className="w-100"
              value={expense.title}
              onChange={handleChange}
              name="title"
            />
            <p className="text-danger">{errors.title}</p>
          </div>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Category
            </label>
            <select
              onChange={handleChange}
              id="category"
              className="w-100 my-2 py-1"
              name="category"
              value={expense.category}
            >
              <option value="" hidden>
                Select Category
              </option>
              <option value="Medicine">Medicine</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
              <option value="Clothes">Clothes</option>
              <option value="Grocery">Grocery</option>
              <option value="Bills">Bills</option>
            </select>
            <p className="text-danger">{errors.category}</p>
          </div>
          <div className="input my-2">
            <label htmlFor="" className="d-block">
              Amount
            </label>
            <input
              type="text"
              className="w-100"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.amount}</p>
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
