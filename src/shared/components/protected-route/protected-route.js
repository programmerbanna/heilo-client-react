import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const isAuthorized = useAuth();
  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
