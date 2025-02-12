import React from "react";

class UserClass extends React.Component {
  constructor() {
    console.log("Child constructor");
    super();
    this.state = {
      userInfo: {
        name: "",
        location: "",
        img: "",
      },
    };
  }
  async componentDidMount() {
    let gitRes = await fetch("https://api.github.com/users/sharma-10-personal");
    let res = await gitRes.json();
    this.setState({
      userInfo: res,
    });
    console.log(this.state.userInfo.img);
  }
  render() {
    console.log("Child render");

    return (
      <div className="about-container">
        <div>User : {this.state.userInfo.name} </div>
        <div>Location : {this.state.userInfo.location}</div>
        <img src={this.state.userInfo.img} />
        <div>Social media : @the_learning_tape</div>
      </div>
    );
  }
}

export default UserClass;
