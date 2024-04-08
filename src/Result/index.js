import { Box } from "./styled";

export const Result = ({ result }) =>
  !!result && (
    <Box>
      {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
      <strong>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </strong>
    </Box>
  );
