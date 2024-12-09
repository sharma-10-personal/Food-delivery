import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

const Applayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const HeaderComponent = () => {
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

let rest_names = ["Bejing Bites", "Coffee Day", "Pizza Hut"];

const BodyComponent = () => {
  return (
    <div className="body-comp">
      <form>
        <input placeholder="Search Restaurant here.."></input>
      </form>
      <div className="res-container">
        <RestaurantCard
          resName=" Beijing Bites"
          cusine="Chineese"
          rating="4.3"
          eta="38 mins"
        />
        <RestaurantCard
          resName={ }
          cusine="Beverages"
          rating="4.8"
          eta="50 mins"
        />
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="rest-img"
        src="https://b.zmtcdn.com/data/pictures/chains/2/50112/122303a57aa6de3e761116bf0f075538_o2_featured_v2.jpg?output-format=webp"
      />
      <div className="rest-name">{props.resName}</div>
      <div className="rest-cusine">{props.cusine}</div>
      <div className="rest-rating"> {props.rating}</div>
      <div className="rest-eta"> {props.eta}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
