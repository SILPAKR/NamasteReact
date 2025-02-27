import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100 ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
