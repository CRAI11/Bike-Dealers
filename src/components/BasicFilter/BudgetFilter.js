import { useState, useEffect } from "react";

export default function BudgetFilter(props) {
  // console.log(brands);
  // console.log(models);
  // console.log(bikeDetails);

  // const [budgetState, setBudget] = useState(null);

  const handleBudgetChange = (e) => {
    props.setBudget(e.target.value);
  };

  useEffect(() => {
    console.log(props.budgetState);
  }, [props.budgetState]);

  return (
    <div>
      <div>Filter Budget</div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <input
            type="radio"
            name={"Budget"}
            value={"50,000 - 70,000"}
            onChange={handleBudgetChange}
          />
          <label>50,000 - 70,000</label>
        </li>
        <li>
          <input
            type="radio"
            name={"Budget"}
            value={"70,000 - 1,00,000"}
            onChange={handleBudgetChange}
          />
          <label>70,000 - 1,00,000</label>
        </li>
        <li>
          <input
            type="radio"
            name={"Budget"}
            value={"1,00,000 - 2,00,000"}
            onChange={handleBudgetChange}
          />
          <label>1,00,000 - 2,00,000</label>
        </li>
      </ul>
    </div>
  );
}
