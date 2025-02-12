import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }
  componentDidMount() {}
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About Class </h1>
        <h2>This is info on about page </h2>
        <UserClass user="Sharma" location="Bengaluru" />
      </>
    );
  }
}

export default About;
