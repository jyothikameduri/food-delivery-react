import { useState, useEffect } from "react";
import ResList from "./data.js";
import ResMock from "../components/Mocks/resCardMock.json";

const normalizeRestaurants = (rawData) => {
  const sourceArray = Array.isArray(rawData) ? rawData : [rawData];

  return sourceArray.map((item) => {
    const info = item?.info
      ? item.info
      : {
          id: item.id || "",
          name: item.name || "",
          cloudinaryImageId: item.cloudinaryImageId || "",
          cuisines: item.cuisines || [],
          avgRating: item.avgRating || "",
          sla: item.sla || {},
          aggregatedDiscountInfoV3: item.aggregatedDiscountInfoV3 || {},
        };

    return {
      info: {
        ...info,
        cloudinaryImageId: info.cloudinaryImageId || "",
        name: info.name || "",
        cuisines: info.cuisines || [],
        avgRating: info.avgRating || "",
        sla: info.sla || {},
        aggregatedDiscountInfoV3: info.aggregatedDiscountInfoV3 || {},
      },
      analytics: item.analytics || {},
      cta: item.cta || {},
    };
  });
};

const useListOfRestaurants = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // Simulate load delay for shimmer effect
    const timer = setTimeout(() => {
      const source =
        Array.isArray(ResList) && ResList.length > 0 ? ResList : ResMock;
      const restaurants = normalizeRestaurants(source);
      setListOfRestaurants(restaurants);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return ListOfRestaurants;
};

export default useListOfRestaurants;
