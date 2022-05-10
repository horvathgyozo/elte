import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../../state/authSlice";

export const RequireAuth = ({ children }) => {
  let user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
