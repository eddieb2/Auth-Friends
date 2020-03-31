import React from "react";
import { Route, Redirect } from "react-router-dom";

// SECTION PRIVATE ROUTE
// REVIEW Rewatch the lecture. Dustin explains exactly what is happening here
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          // NOTE User is authorized
          return <Component {...props} />;
        } else {
          // NOTE User is not authorized
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
