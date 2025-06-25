import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthRedirect = () => {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

export default AuthRedirect;
