import { MENU_API } from "./constants";
import { useState, useEffect } from "react";
import ResList from "./data.js";

const mapMenuItemsToCards = (items = []) => {
  return items.map((item) => ({
    card: {
      info: {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price ? item.price * 100 : item.defaultPrice || 0,
        defaultPrice: item.price ? item.price * 100 : item.defaultPrice || 0,
        imageId: item.image,
        isVeg: item.isVeg ? 1 : 0,
        isBestseller: item.isBestseller || false,
        ratings: item.ratings || {},
      },
    },
  }));
};

const buildMenuFromData = (restaurant) => {
  if (!restaurant) return null;

  const info = {
    ...restaurant.info,
    avgRating: restaurant.info.avgRating || 0,
    costForTwoMessage: restaurant.info.costForTwo || "₹0 for two",
    cuisines: restaurant.info.cuisines || [],
    totalRatingsString: restaurant.info.totalRatingsString || "0 Ratings",
  };

  const categoryMap = (restaurant.info.menu || []).reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const categoryCards = Object.entries(categoryMap).map(
    ([category, items]) => ({
      card: {
        card: {
          "@type":
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          title: category,
          categoryId: category.toLowerCase().replace(/\s+/g, "-"),
          itemCards: mapMenuItemsToCards(items),
        },
      },
    }),
  );

  return {
    cards: [
      null,
      null,
      {
        card: {
          card: {
            info,
          },
        },
      },
      null,
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: categoryCards,
            },
          },
        },
      },
    ],
  };
};

const useRestaurantMenu = (menuId) => {
  const [ListOfMenu, setListOfMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [menuId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + menuId);
      if (!data.ok) {
        throw new Error(`HTTP ${data.status}`);
      }
      const json = await data.json();
      if (json?.data) {
        setListOfMenu(json.data);
        return;
      }
    } catch (error) {
      console.warn(
        "RestaurantMenu API fetch failed, falling back to local data:",
        error,
      );
    }

    const restaurant = ResList.find(
      (res) => String(res?.info?.id) === String(menuId),
    );

    const localMenu = buildMenuFromData(restaurant);
    setListOfMenu(localMenu);
  };

  return ListOfMenu;
};

export default useRestaurantMenu;
