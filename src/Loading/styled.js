import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 20px;
  padding: 20px;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  padding: 30px;
`;

export const Statement = styled.p`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  font-size: 20px;
`;
