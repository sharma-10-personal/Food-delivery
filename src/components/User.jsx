import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { user, location } = props;
  return (
    <div className="about-container">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        incrementer
      </button>
      <div>User : {user} (from function Component)</div>
      <div>Location : {location}</div>
      <div> social media : @the_learning_tape</div>
    </div>
  );
};

export default User;
