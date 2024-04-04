import { useState } from "react";
import "./App.css";
import currencies from "./currency";
import Form from "./Form";
import Result from "./Result";
import { Clock } from "./Clock";
import { StyledApp, Info } from "./styled";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ symbol }) => symbol === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <StyledApp>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
      <Result result={result} />
      <Info>Kursy pochodzą z Tabela nr 066/A/NBP/2024 z dnia 2024-04-03</Info>
    </StyledApp>
  );
}

export default App;
