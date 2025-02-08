import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { id } = useParams();
  useEffect(() => {
    getMenu();
  }, {id});

  const [menu, setMenu] = useState([]);
  const [resName, setResName] = useState("");
  const [loading, setLoading] = useState(true);

  const getMenu = async () => {
    let menuDetails = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=43836&catalog_qa=undefined&submitAction=ENTER"
    );
    menuDetails = await menuDetails.json();

    setResName(menuDetails?.data?.cards[0].card.card.text);

    menuDetails =
      menuDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    let allItemCards = [];

    if (menuDetails) {
      for (let i = 0; i < menuDetails.length; i++) {
        let itemCards = menuDetails[i]?.card?.card?.itemCards;
        if (itemCards) {
          allItemCards.push(...itemCards);
        }
      }
    }

    setMenu(allItemCards);
    setLoading(false);
  };

  if (loading) {
    return <Shimmer />;
  }
  
  return (

    <div className="menu-body">
      <h1> {resName}</h1>
      <div>
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
