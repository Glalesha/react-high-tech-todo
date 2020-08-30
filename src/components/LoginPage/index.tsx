import React, { useState, useCallback } from "react";
import { auth } from "../../firebase/index";
import { connect } from "react-redux";
import setUserId from "../../store/actions/setUserId";
import styled from "styled-components";
import Button from "../Button/index";

const LoginPage: React.FC<any> = ({ history, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      console.log(submitValue);

      try {
        let authData;
        if (submitValue === "login") {
          authData = await auth.signInWithEmailAndPassword(email, password);
        } else {
          console.log(13);
          authData = await auth.createUserWithEmailAndPassword(email, password);
        }
        const userId = authData?.user?.uid!;
        setUserId(userId);
        history.push("/");
      } catch (error) {
        console.log(error);
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
            <RadioLabel htmlFor="login">Log in</RadioLabel>
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
            <RadioLabel htmlFor="signup">Sign up</RadioLabel>
          </InputBlock>
        </RadioWrapper>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default connect(null, { setUserId })(LoginPage);

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
      background-color: blue;
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
`;
