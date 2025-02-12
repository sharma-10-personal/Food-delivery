import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const { menu, resName, subheader, loading } = resInfo;

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="menu-body">
      <h1> {resName}</h1>
      <div className="menu-subheader">
        <h3>Outlet : {subheader.areaName}</h3>
        <h3>
          {" "}
          your order will be delivered in {subheader.sla.minDeliveryTime} -
          {subheader.sla.maxDeliveryTime} mins
        </h3>
        <h3>{subheader.costForTwoMessage}</h3>
        <h3>Ratings : {subheader.avgRating}</h3>
      </div>

      <div className="menu-all-items">
        {menu.map((items, key) => {
          return (
            <div className="menu-item" key={key}>
              <div className="item-details">
                <div className="item-name">{items.card?.info.name} </div>
                <div className="item-price">
                  {"₹ " + items.card?.info.price / 100}
                </div>
              </div>
              <div className="item-img-and-btn">
                <div>
                  <img
                    className="item-img"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      items.card?.info.imageId
                    }
                  />
                </div>
                <button className="add-btn">Add</button>
              </div>
            </div>
          );
        })}
      </div>
      <ol>
        {menu.map((items, key) => {
          return <li key={key}>{items.card?.info.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
