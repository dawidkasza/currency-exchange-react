import { Box } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

export const Clock = () => {
  const date = useCurrentDate();

  return <Box>{formatDate(date)}</Box>;
};
