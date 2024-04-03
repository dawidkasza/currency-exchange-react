import { useState } from "react";
import "./App.css";
import currencies from "./currency";
import Form from "./Form";
import Result from "./Result";

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
    <div className="App">
      <Form result={result} calculateResult={calculateResult} />
      <Result result={result} />
    </div>
  );
}

export default App;
