import { SWIGGY_CDN_URL } from "../../config/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    props.resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="rest-img"
        src={SWIGGY_CDN_URL + cloudinaryImageId}
      />
      <div className="rest-name">{name}</div>
      <div className="rest-cusine">
        {cuisines.map((ele) => {
          return ele + ", ";
        })}
      </div>
      <div className="rest-rating">{"Rating : " + avgRatingString}</div>
      <div className="rest-eta"> {sla.slaString}</div>
    </div>
  );
};

export default RestaurantCard;
