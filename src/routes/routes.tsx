import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { Auth } from "../pages";
import Welcome from "../pages/welcome/welcome";

const Routes: React.FC = () => {
  const isAuthenticated = false;
  return (
    <Switch>
      <Route path="app"></Route>

      <Route path="auth">
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route index path="*" element={<Navigate to="/auth/login" />} />
      </Route>
      <Route
        index
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/app/dashboard" : "/auth/welcome"} />
        }
      />
    </Switch>
  );
};
export default Routes;
