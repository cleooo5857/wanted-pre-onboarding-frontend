import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TokenRepository } from "../repository/TokenRepository";

function PrivateRoute() {
  const access = TokenRepository.getToken();

  if (access) {
    return <Outlet />;
  } else {
    // User is not logged in, redirect to /signin
    return <Navigate to="/signin" replace />;
  }
}

export default PrivateRoute;
