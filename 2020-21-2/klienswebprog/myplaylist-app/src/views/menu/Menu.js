import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu as MenuComp } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUser } from "../../state/auth/selectors";
import { logout } from "../../state/auth/actions";

export function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <nav className="ui secondary menu">
      <img src={logo} alt="" />
      <NavLink className="item" exact to="/">
        <i className="home icon"></i> Home
      </NavLink>
      <NavLink className="item" to="/playlists">
        <i className="headphones icon"></i> My Playlists
      </NavLink>
      <NavLink className="item" to="/tracks">
        <i className="music icon"></i> Tracks
      </NavLink>
      <NavLink className="item" to="/search">
        <i className="search icon"></i> Search
      </NavLink>
      <MenuComp.Menu position="right">
        {isLoggedIn ? (
          <a href="#logout" className="item" onClick={handleLogout}>
            Log out ({user.email})
          </a>
        ) : (
          <Link to="/" className="item">
            Log in
          </Link>
        )}
      </MenuComp.Menu>
    </nav>
  );
}
