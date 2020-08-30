import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

const PrivateRouter: React.FC<any> = ({
  component: RouteComponent,
  ...rest
}) => {
  const { currentUser }: any = useContext(AuthContext);
  console.log(currentUser);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRouter;
