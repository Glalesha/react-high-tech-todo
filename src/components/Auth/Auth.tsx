import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/index";

export const AuthContext = createContext({ currentUser: null });

const AuthProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  return (
    <React.Fragment>
      {pending ? (
        <h1>loading...</h1>
      ) : (
        <AuthContext.Provider value={{ currentUser } as any}>
          {children}
        </AuthContext.Provider>
      )}
    </React.Fragment>
  );
};

export default AuthProvider;
