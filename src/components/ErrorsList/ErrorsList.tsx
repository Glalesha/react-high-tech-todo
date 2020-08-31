import React from "react";
import styled from "styled-components";

interface Props {
  errorsMessages: string[];
}

const ErrorsList: React.FC<Props> = ({ errorsMessages }) => {
  return (
    <ErrorsUl>
      {errorsMessages.map((errorMessage: string) => {
        return (
          <ErrorLi>
            <Error>{errorMessage}</Error>
          </ErrorLi>
        );
      })}
    </ErrorsUl>
  );
};

export default ErrorsList;

const ErrorsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 0;
  padding: 0;
`;

const ErrorLi = styled.li`
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
`;

const Error = styled.p`
  margin: 0;
  color: red;
`;
