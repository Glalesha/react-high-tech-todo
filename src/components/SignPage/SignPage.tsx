import React, { useState, useCallback } from "react";
import { History } from "history";
import { auth } from "../../firebase/index";
import styled from "styled-components";
import Button from "../Button/Button";
import ErrorsList from "../ErrorsList/ErrorsList";
import { getErrorsText } from "../../utils/utils";

interface Props {
  history: History;
}

const SignPage: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [errors, setErrors]: any = useState([]);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (!submitValue) {
        console.log(1234);
        setErrors([...errors, { code: "submit-type-not-choosed" }]);
      } else {
        try {
          if (submitValue === "login") {
            await auth.signInWithEmailAndPassword(email, password);
          } else {
            await auth.createUserWithEmailAndPassword(email, password);
          }
          history.push("/");
        } catch (error) {
          setErrors([...errors, error]);
        }
      }
    },
    [history, email, password, submitValue]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <CredentialLabel htmlFor="email">Email</CredentialLabel>
          <CredentialInput
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          ></CredentialInput>
        </InputBlock>
        <InputBlock>
          <CredentialLabel htmlFor="password">Password</CredentialLabel>
          <CredentialInput
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          ></CredentialInput>
        </InputBlock>
        <RadioWrapper>
          <InputBlock>
            <RadioInput
              id="login"
              name="submitType"
              type="radio"
              value="login"
              checked={submitValue === "login" ? true : false}
              onChange={(e: any) => setSubmitValue(e.target.value)}
            ></RadioInput>
            <RadioLabel htmlFor="login" tabIndex={0}>
              Log in
            </RadioLabel>
          </InputBlock>
          <InputBlock>
            <RadioInput
              id="signup"
              name="submitType"
              type="radio"
              value="signup"
              checked={submitValue === "signup" ? true : false}
              onChange={(e: any) => setSubmitValue(e.target.value)}
            ></RadioInput>
            <RadioLabel htmlFor="signup" tabIndex={0}>
              Sign up
            </RadioLabel>
          </InputBlock>
        </RadioWrapper>
        <Button type="submit">Submit</Button>
      </Form>
      <ErrorsList errorsMessages={getErrorsText(errors)} />
    </div>
  );
};

export default React.memo(SignPage);

const Form = styled.form`
  margin-top: 100px;
`;

const InputBlock = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const CredentialLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

const CredentialInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background-color: #fcfcfc;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 16px;
`;

const RadioWrapper = styled.div`
  display: flex;
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    &:before {
      background-color: rgba(44, 130, 201, 1);
    }
  }
`;

const RadioLabel = styled.label`
  display: block;
  margin-right: 30px;
  margin-left: 30px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fcfcfc;
    border: 1px solid grey;
  }

  &:hover {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: rgba(44, 130, 201, 0.5);
      border: 1px solid grey;
    }
  }

  &:focus {
    &:before {
      border: 1px solid rgba(44, 130, 201, 1);
    }
  }
`;
