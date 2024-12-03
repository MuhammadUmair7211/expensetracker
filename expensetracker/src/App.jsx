import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import expenseData from "./expenseData";
import { useLocalStorage } from "./components/useLocalStorage";
function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [localData, setLocalData] = useLocalStorage("myNum", [1, 2, 3, 4]);
  console.log(localData);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h3>Track Your Expense</h3>
          <div className="col-md-6 col-sm-12">
            <Form setExpenses={setExpenses} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Table expenses={expenses} setExpenses={setExpenses} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
