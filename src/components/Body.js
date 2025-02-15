import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Reasturants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
