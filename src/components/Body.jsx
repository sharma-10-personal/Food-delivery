import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resDetail, setResDetail] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    let realRestData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9730003&lng=77.66771&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const restJsonData = await realRestData.json();
    // return realRestData;

    setResDetail(
      restJsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  if (resDetail.length == 0) {
    return <Shimmer />;
  }
  console.log(resDetail.length);
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
