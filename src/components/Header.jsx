import logo from "../../utils/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logoimg" src={logo} />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
