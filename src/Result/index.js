import "./style.css";

const Result = ({ result }) =>
  !!result && (
    <p className="result">
      {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
      <strong>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </strong>
    </p>
  );

export default Result;
