import Shimmer from "./ShimmerUI";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { menuId } = useParams(); // This is used to send the id through route
  console.log(menuId);

  const ListOfMenu = useRestaurantMenu(menuId);//this is a custom hook -> to maintain the single responsibility principle

  if (!ListOfMenu) {
    return <Shimmer />;
  }

  const {name,avgRating,costForTwoMessage,cuisines} = ListOfMenu?.cards?.[2]?.card?.card?.info;

  const menuCards =
    ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemsCard = menuCards.find(
    (card) => card?.card?.card?.itemCards
  );

  const itemCards = itemsCard?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        <span style={{ color: "green"}}>★</span> {avgRating} - {costForTwoMessage}
      </p>
      <p>{cuisines.join(' , ')}</p>
      <div className="regular">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
