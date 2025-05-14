import { useEffect, useState } from "react";

const Practise = (prop) => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("");
  let [list, setList] = useState([]);
  let { name1, location, email } = prop;

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    let realRestData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9730003&lng=77.66771&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await realRestData.json();
    let faces = data.data.cards[3].card.card.facetList;
    console.log(faces[0].label);
    setList(faces);
  }
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        addtion
      </button>
      {/* <div>{data.data.cards}</div> */}

      <div> {counter}</div>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        {" "}
        subtraction
      </button>
      <div>Practise</div>
      <div>
        {list.map((ele) => {
          return <li>{ele.label}</li>;
        })}
      </div>
      <div>{name1}</div>
      <div>{location}</div>
      <div>{email}</div>
    </>
  );
};
export default Practise;
