import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { connect } from "react-redux";
import clearErrors from "../../store/actions/clearErrors";

interface Props {
  errorsMessages: string[];
  clearErrors(): void;
}

const ErrorsList: React.FC<Props> = ({ errorsMessages, clearErrors }) => {
  return (
    <React.Fragment>
      <ErrorsUl>
        {errorsMessages.map((errorMessage: string, index: number) => {
          return (
            <ErrorLi key={index}>
              <Error data-test="error-message">{errorMessage}</Error>
            </ErrorLi>
          );
        })}
      </ErrorsUl>
      <ButtonWrapper>
        <Button onChildClick={() => clearErrors()} size="small">
          Clear errors
        </Button>
      </ButtonWrapper>
    </React.Fragment>
  );
};

export default connect(null, { clearErrors })(ErrorsList);

const ErrorsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 0;
  padding: 0;
`;

const ErrorLi = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
`;

const Error = styled.p`
  margin: 0;
  margin-right: 10px;
  color: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
