import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline..plz check your internet connection</h1>
    );
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("hii", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories accordions */}
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
