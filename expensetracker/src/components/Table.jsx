/* eslint-disable react/prop-types */
import React from "react";

const Table = ({ expenses }) => {
  return (
    <div>
      <div className="container p-0">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <select className="w-100 border-0 py-1" id="">
                  <option value="">All Categories</option>
                  <option value="">Medicine</option>
                  <option value="">Education</option>
                  <option value="">Business</option>
                  <option value="">Clothes</option>
                  <option value="">Grocery</option>
                  <option value="">Bills</option>
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
            {expenses.map(({ id, title, category, amount }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{category}</td>
                <td>Rs {amount}</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th></th>
              <th>Rs 8100</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
