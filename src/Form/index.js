import "./style.css";
import { useState } from "react";
import currencies from "../currency";
import { Fieldset, Legend, LabelText, Field, Button } from "./styled";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [amount, setAmount] = useState("");

  const onFormsubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormsubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        <p>
          <label>
            <LabelText>Waluta:</LabelText>
            <Field
              as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className=" form__field"
            >
              {currencies.map((currency) => (
                <option value={currency.symbol} key={currency.symbol}>
                  {currency.symbol} - {currency.name}
                </option>
              ))}
            </Field>
          </label>
        </p>
        <p>
          <label>
            <LabelText>Kwota w złotówkach:</LabelText>
            <Field
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
      </Fieldset>
      <p>
        <Button className="form__button">Przelicz</Button>
      </p>
    </form>
  );
};

export default Form;
