import { useState, useEffect } from "react";


const useListOfRestaurants = ()=>{

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
    // fetch delays in retrieving the data i.e., API call . we used shimmer at that delay 
    // --> but because of not using fetch useEffect() works synchronously 
    // --> but i want shimmer effect just for my sake 
    // --> so i used setTimeout to make delay like fetch (for my experience like website dev) 
    // --> also we can host out data in the mockapi.io
    // setTimeout(() => {
    //   setListOfRestaurants(resList);
    //   setfilteredRestaurants(resList);
    // }, 1000); 
    fetchData();
    }, []);

    const extractRestaurants = (cards) => {
    for (let card of cards) {
        const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) return restaurants;
    }
    console.warn("Restaurants not found — API structure might have changed");
    return [];
    };

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const cards = json?.data?.cards || [];
        console.log(json?.data?.cards);

        const restaurants = extractRestaurants(cards);
        setListOfRestaurants(restaurants);
    };

    return ListOfRestaurants;

}

export default useListOfRestaurants;