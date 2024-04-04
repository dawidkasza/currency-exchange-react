import "./style.css";
import { useState } from "react";
import currencies from "../currency";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [amount, setAmount] = useState("");

  const onFormsubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormsubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik walut</legend>
        <p>
          <label>
            <span className="form__labelText">Waluta:</span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className=" form__field"
            >
              {currencies.map((currency) => (
                <option value={currency.symbol} key={currency.symbol}>
                  {currency.symbol} - {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Kwota w złotówkach:</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className=" form__field"
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
            />
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
    </form>
  );
};

export default Form;
