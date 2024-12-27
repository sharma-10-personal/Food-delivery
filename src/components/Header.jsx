import logo from "../../utils/logo.jpg";
import { useState } from "react";

const Header = () => {
  let [logInStatus, setlogInStatus] = useState("Login");

  return (
    <div className="header">
      <img className="logoimg" src={logo} />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
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
