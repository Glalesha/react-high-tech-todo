import React, { useState, useCallback } from "react";
import { auth } from "../../firebase/index";
import { connect } from "react-redux";
import setUserId from "../../store/actions/setUserId";
import styled from "styled-components";

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
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <CredentialInput
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        ></CredentialInput>
        <label htmlFor="password">Password</label>
        <CredentialInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        ></CredentialInput>
        <input
          id="login"
          name="loginOrSignup"
          type="radio"
          value="login"
          checked={submitValue === "login" ? true : false}
          onChange={(e: any) => setSubmitValue(e.target.value)}
        ></input>
        <label>Log in</label>
        <input
          id="signup"
          name="loginOrSignup"
          type="radio"
          value="signup"
          checked={submitValue === "signup" ? true : false}
          onChange={(e: any) => setSubmitValue(e.target.value)}
        ></input>
        <label>Sign up</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const CredentialInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid red;
`;

export default connect(null, { setUserId })(LoginPage);
