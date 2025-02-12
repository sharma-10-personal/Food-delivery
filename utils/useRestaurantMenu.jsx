import { useState, useEffect } from "react";
import { SWIGGY_MENU_API } from "../config/constants";

const useRestaurantMenu = (id) => {
  useEffect(() => {
    getMenu();
  }, []);

  const [menu, setMenu] = useState([]);
  const [resName, setResName] = useState("");
  const [loading, setLoading] = useState(true);
  const [subheader, setSubHeader] = useState([]);

  const getMenu = async () => {
    let menuDetails = await fetch(SWIGGY_MENU_API + id);
    menuDetails = await menuDetails.json();

    setSubHeader(menuDetails?.data?.cards[2]?.card?.card?.info);

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
  return {
    menu: menu,
    resName: resName,
    loading: loading,
    subheader: subheader,
  };
};

export default useRestaurantMenu;
