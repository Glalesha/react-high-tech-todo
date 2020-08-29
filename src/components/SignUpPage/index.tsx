import React, { useState, useCallback } from "react";
import { auth } from "../../firebase/index";

const SignUpPage: React.FC<any> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (e: any) => {
      e.preventDefault();

      console.log(history);
      console.log(email, password);
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history, email, password]
  );

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignUpPage;
