export default function BudgetFilter() {
  return (
    <div>
      <div>Filter Budget</div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <input type="radio" />
          <label>50,000 - 70,000</label>
        </li>
        <li>
          <input type="radio" />
          <label>70,000 - 1,00,000</label>
        </li>
        <li>
          <input type="radio" />
          <label>1,00,000 - 2,00,000</label>
        </li>
      </ul>
    </div>
  );
}
