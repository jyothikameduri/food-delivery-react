import resList from "../utils/data"; 
import ResCard from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import "../index.css";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchName,setsearchName] = useState("");

useEffect(() => {
  // fetch delays in retrieving the data i.e., API call . we used shimmer at that delay 
  // --> but because of not using fetch useEffect() works synchronously 
  // --> but i want shimmer effect just for my sake 
  // --> so i used setTimeout to make delay like fetch (for my experience like website dev) 
  setTimeout(() => {
    setListOfRestaurants(resList);
    setfilteredRestaurants(resList);
  }, 1000); 
}, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json?.data?.cards);

  //   const restaurants =
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  //   setListOfRestaurants(restaurants);
  //   setfilteredRestaurants(restaurants);
  // };

  //this is conditional rendering
//   if (ListOfRestaurants.length === 0){
//     return <Shimmer/>    
//   }
  console.log("body rendered");
  return ListOfRestaurants.length === 0 ?(<Shimmer/>) : (
    <div className="body">
      <div className="filter">
        <div className="searchbar">
            <input placeholder="Enter the Restaurant name" value={searchName} onChange={(e)=>setsearchName(e.target.value)}></input>
            <button onClick={()=>{
                let filteredNames = ListOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchName.toLowerCase()));
                // setListOfRestaurants(filteredNames); This will update the original restaurants list and if we try to filter again then , it gets filtered from the previous filterd list --> so , we will keep the copy of filtered list 
                setfilteredRestaurants(filteredNames);   
            }
            }>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = ListOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setfilteredRestaurants(filteredData);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
