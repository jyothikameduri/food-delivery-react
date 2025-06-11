import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const RestaurantMenu = () => {
  const { menuId } = useParams();
  console.log(menuId);

  const ListOfMenu = useRestaurantMenu(menuId);

  if (!ListOfMenu) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines ,totalRatingsString} =
    ListOfMenu?.cards?.[2]?.card?.card?.info;

  const menuCards =
    ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    c=> c.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'); 
  console.log(categories);
  
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center font -[28px] ">{name}</h1>
      <p className="text-center text-[#02060CEB] mb-1 font - [16px]">
        <span className="text-green-600 ">★</span> 
        <span className="text-[#02060CEB]">{avgRating}({totalRatingsString}) • {costForTwoMessage}</span>
      </p>
      <p className="text-center text-sm text-gray-500 mb-6">{cuisines.join(" , ")}</p>
      <div className="px-4 p-6 max-w-3xl mx-auto text-center ">
        <h1 className="text-[#02060C99]">-- MENU --</h1>
        <input
        className="border rounded-2xl px-4 bg-[#02060C0D] font-[16px] p-3 w-[600px]"
        placeholder="Search for dishes"/>
        <button className="px-2 py-6"><FontAwesomeIcon icon={faSearch} className="text-2xl text-[#02060C99]"></FontAwesomeIcon></button>
      </div>
        <div className="border-b-[1px] border-b-[#02060C26]">
          <h1>Veg/Non-veg</h1>
        </div>
      {
        categories.map((category,index)=>{
          return (
            <div className="py-3" key={category.card.card.categoryId || index}>
              <RestaurantCategories data={category?.card?.card}/>
            </div>
          )
        })
      }
       </div>
  );
};

export default RestaurantMenu;
