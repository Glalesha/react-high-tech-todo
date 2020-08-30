import React, { useContext, ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

interface Props {
  component: ComponentType<any>;
  [propName: string]: any;
}

const PrivateRouter: React.FC<Props> = ({
  component: RouteComponent,
  ...rest
}) => {
  const { currentUser }: any = useContext(AuthContext);

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

export default PrivateRouter as any;
