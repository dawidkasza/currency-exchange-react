import { Form } from "./Form";
import { Clock } from "./Clock";
import { StyledApp } from "./styled";
import { useRatesData } from "./useRatesDate";
import { Loading } from "./Loading";
import { Failure } from "./Failure";

function App() {
  const ratesData = useRatesData();

  return (
    <StyledApp>
      <Clock />
      {ratesData.state === "loading" ? (
        <Loading />
      ) : ratesData.state === "error" ? (
        <Failure />
      ) : (
        <Form ratesData={ratesData} />
      )}
    </StyledApp>
  );
}

export default App;
