import { useState } from "react";
import { Fieldset, Legend, LabelText, Field, Button, Info } from "./styled";
import { Result } from "../Result";

export const Form = ({ ratesData }) => {
  const date = new Date(ratesData.date);
  const [result, setResult] = useState();

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

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
            >
              {Object.keys(ratesData.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
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
              type="number"
              min="0.01"
              step="0.01"
            />
          </label>
        </p>
      </Fieldset>
      <p>
        <Button className="form__button">Przelicz</Button>
      </p>
      <Result result={result} />

      <Info>
        Kursy pochodzą z Tabela nr 066/A/NBP/2024 z dnia{" "}
        {date.toLocaleDateString()}
      </Info>
    </form>
  );
};
