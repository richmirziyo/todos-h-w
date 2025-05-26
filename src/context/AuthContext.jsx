import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNewClick = () => {
    if (isLoggedIn) {
      navigate("/new-blog");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <button onClick={handleNewClick}>New</button>
      {isLoggedIn ? (
        <NavLink to="/profile">Profile</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default Header;
