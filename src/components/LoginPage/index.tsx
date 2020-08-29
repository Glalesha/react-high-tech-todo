import React, { useState, useCallback } from "react";
import { auth } from "../../firebase/index";

const LoginPage: React.FC<any> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (e: any) => {
      e.preventDefault();

      try {
        const authData = await auth.signInWithEmailAndPassword(email, password);
        console.log(authData?.user?.uid);
        history.push("/");
      } catch {}
    },
    [history, email, password]
  );

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
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

export default LoginPage;
