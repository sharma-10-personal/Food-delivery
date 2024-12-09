import RestaurantCard from "./RestaurantCard";
import restList from "../../utils/mockData";
const Body = () => {
  return (
    <div className="body-comp">
      <div>
        <button className="top-rated-btn" onClick={() => {}}>
          Filter top rated
        </button>
      </div>
      <div className="res-container">
        {restList.map((ele, val) => {
          return <RestaurantCard key={val} resData={restList[val].info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
