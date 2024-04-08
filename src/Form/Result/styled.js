import styled from "styled-components";

export const Box = styled.p`
  text-align: center;
  font-size: larger;
  border: 1px solid rgb(204, 204, 204);
  background-color: ${({ theme }) => theme.color.alto};
  box-shadow: 2px 8px 5px -9px rgba(78, 78, 83, 1);
  border-radius: 5px;
  padding: 7px;
`;
