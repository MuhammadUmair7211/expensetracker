import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
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
          <Input
            label="Title"
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChange}
            error={errors.title}
          />
          <Select
            label="Category"
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
            error={errors.category}
            options={[
              "Grocery",
              "Clothes",
              "Education",
              "Business",
              "Bills",
              "Medicine",
            ]}
          />
          <Input
            label="Amount"
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            error={errors.amount}
          />
          <button className="btn btn-primary w-100 border-0 py-2 my-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
