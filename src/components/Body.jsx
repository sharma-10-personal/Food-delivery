import RestaurantCard from "./RestaurantCard";
import restList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resDetail, setResDetail] = useState(restList);
  return (
    <div className="body-comp">
      <div>
        <button
          className="top-rated-btn"
          onClick={() => {
            {
              let topResList = resDetail.filter((ele, val) => {
                return ele.info.avgRatingString > "4.5";
              });
              console.log(topResList);
              setResDetail(topResList);
            }
          }}
        >
          Filter top rated
        </button>

        <button
          className="pure-veg"
          onClick={() => {
            let pureVeg = resDetail.filter((res) => {
              return res.info?.veg == true;
            });
            return setResDetail(pureVeg);
          }}
        >
          Pure Veg
        </button>
      </div>
      <div className="res-container">
        {resDetail.map((ele, val) => {
          return <RestaurantCard key={val} resData={ele.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
