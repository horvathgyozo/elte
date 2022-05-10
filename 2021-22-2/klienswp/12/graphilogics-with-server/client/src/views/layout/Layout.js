import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthStatus } from "../auth/AuthStatus";

export const Layout = () => (
  <>
    <h1>GraphiLogics</h1>
    <ul>
      <li>
        <Link to="/">Játék</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <AuthStatus />
    <Outlet />
  </>
);
