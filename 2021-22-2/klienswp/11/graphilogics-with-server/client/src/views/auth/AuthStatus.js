import { useDispatch, useSelector } from "react-redux";
import { logout, selectLoggedInUser } from "../../state/authSlice";

export const AuthStatus = () => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  if (!user) {
    return "You need to log in";
  }

  return (
    <p>
      You are logged in, {user.email}!
      <button onClick={() => dispatch(logout())}>Logout</button>
    </p>
  );
};
