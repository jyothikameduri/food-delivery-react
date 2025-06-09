import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { menuId } = useParams();
  console.log(menuId);

  const ListOfMenu = useRestaurantMenu(menuId);

  if (!ListOfMenu) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    ListOfMenu?.cards?.[2]?.card?.card?.info;

  const menuCards =
    ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    c=> c.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'); 
  console.log(categories);
  
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center">{name}</h1>
      <p className="text-center text-gray-600 mb-1">
        <span className="text-green-600">★</span> {avgRating} • {costForTwoMessage}
      </p>
      <p className="text-center text-sm text-gray-500 mb-6">{cuisines.join(" , ")}</p>
      {
        categories.map((category,index)=>{
          return <RestaurantCategories key={category.card.card.categoryId || index} data={category?.card?.card}/>
        })
      }
       </div>
  );
};

export default RestaurantMenu;
