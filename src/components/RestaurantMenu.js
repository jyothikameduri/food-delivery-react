import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
import RestaurantCategories from "./RestaurantCategories";
import MenuFilters from "./MenuFilters";
import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const { menuId } = useParams();
  const ListOfMenu = useRestaurantMenu(menuId);

  const [filteredCategory, setFilteredCategory] = useState([]);

  //  useMemo to avoid re-computation on every render
  const categories = useMemo(() => {
    return (
      ListOfMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || []
    );
  }, [ListOfMenu]);

  // Update state only when categories change
  useEffect(() => {
    setFilteredCategory(categories);
  }, [categories]);

  if (!ListOfMenu) return <Shimmer />;

  const info = ListOfMenu?.cards?.[2]?.card?.card?.info;
  if (!info) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines, totalRatingsString} = info;

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-center text-gray-600 text-sm mb-1">
        ★ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
      </p>
      <p className="text-center text-gray-500 mb-6">{cuisines.join(", ")}</p>

      {/* Search Bar */}
      <div className="text-center mb-6">
        <h2 className="text-gray-500 mb-2">-- MENU --</h2>
        <input
          placeholder="Search for dishes"
          className="border rounded-2xl px-4 py-3 bg-gray-100 w-[600px]"
        />
        <button className="ml-2">
          <FontAwesomeIcon icon={faSearch} className="text-xl text-gray-500" />
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 border-b pb-4">
        <MenuFilters
          listOfMenu={ListOfMenu}
          category={categories}
          setFilteredCategory={setFilteredCategory}
        />
      </div>

      {/* Render Menu */}
      {filteredCategory?.map((category, index) => {
        const data = category?.card?.card;
        if (!data) return null;

        return (
          <div key={data?.categoryId || data?.title || index} className="py-3">
            <RestaurantCategories data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
