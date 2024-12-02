/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

const Table = ({ expenses, setExpenses }) => {
  const [category, setCategory] = useState("");
  const filteredData = expenses.filter((expense) => {
    return expense.category.includes(category);
  });

  const total = filteredData.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  const [rowId, setRowId] = useState("");
  const [menuPosition, setMenuPosition] = useState({});
  return (
    <div>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenses={setExpenses}
        rowId={rowId}
      />
      <div className="container p-0">
        <table
          className="table table-bordered table-hover"
          onClick={() => {
            setMenuPosition({});
          }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <select
                  className="w-100 border-0 py-1"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Education">Education</option>
                  <option value="Business">Business</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Bills">Bills</option>
                </select>
              </th>
              <th className="d-flex align-items-center">
                <div className="name">Amount</div>
                <div className="icon m-auto">
                  <i className="fa-solid fa-arrow-up" />
                  <i className="fa-solid fa-arrow-down" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ id, title, category, amount }) => (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({
                    left: e.clientX + 10,
                    top: e.clientY + 10,
                  });
                  setRowId(id);
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>Rs {amount}</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th></th>
              <th>Rs {total}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
