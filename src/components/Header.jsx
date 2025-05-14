import logo from "../../utils/logo.jpg";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  let [logInStatus, setlogInStatus] = useState("Login");

  return (
    <div className="header">
      <img className="logoimg" src={logo} />
      <ul className="nav-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us </Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/groceries">Groceries</Link>
        </li>
        <li>
          <Link to="/practise">Practise</Link>
        </li>
        <button
          className="login-btn"
          onClick={() => {
            logInStatus === "Login"
              ? setlogInStatus("Logout")
              : setlogInStatus("Login");
          }}
        >
          {logInStatus}
        </button>
      </ul>
    </div>
  );
};

export default Header;
