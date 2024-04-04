import styled from "styled-components";

export const Fieldset = styled.fieldset`
  background-color: #ccc;
  padding: 10px;
  border-radius: 5px;
`;

export const Legend = styled.legend`
  background-color: darkred;
  padding: 3px 10px;
  border-radius: 5px;
  color: aliceblue;
`;

export const LabelText = styled.span`
  max-width: 150px;
  width: 100%;
  display: inline-block;
  margin-right: 5px;
`;

export const Field = styled.input`
  padding: 10px;
  max-width: 400px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: darkred;
  color: white;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
