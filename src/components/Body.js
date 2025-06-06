import ResCard from "./RestaurantCards";
import {useState , useEffect} from 'react';
import Shimmer from "./ShimmerUI";
import "../index.css";
import {Link} from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchName,setsearchName] = useState("");

  const ListOfRestaurants = useListOfRestaurants();


  useEffect(() => {
  setfilteredRestaurants(ListOfRestaurants); 
  }, [ListOfRestaurants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false){
      return (<h1 className="online-status">You seem to be offline. Check your network settings and try again.</h1>)
  };

  //this is conditional rendering
//   if (ListOfRestaurants.length === 0){
//     return <Shimmer/>    
//   }

  return ListOfRestaurants.length === 0 ?(<Shimmer/>) : (
    <div className="body">
      <div className="filter">
        <div className="searchbar">
            <input id="searchbar" placeholder="Enter the Restaurant name" value={searchName} onChange={(e)=>setsearchName(e.target.value)}></input>
            <button onClick={()=>{
                let filteredNames = ListOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchName.toLowerCase()));
                // setListOfRestaurants(filteredNames); This will update the original restaurants list and if we try to filter again then , it gets filtered from the previous filterd list --> so , we will keep the copy of filtered list 
                setfilteredRestaurants(filteredNames);   
            }
            }>Search</button>
        </div>
        <div className="filterButtons">
          <button className="filter-btn" onClick={() => {
            const filteredPrice = ListOfRestaurants.filter((restaurant) => {
              const costStr = restaurant.info.costForTwo; 
              const match = costStr.match(/\d+/); 
              const cost = match ? parseInt(match[0]) : 0;
              return cost < 300;
            });
            setfilteredRestaurants(filteredPrice);
          }}>
            Less than ₹300
        </button>
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
        
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link className="restaurants-link" key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}>
            <ResCard {...restaurant.info} />
            {/** By using props 
             * <ResCard
              name={restaurant.info.name}
              id={restaurant.info.id}
              cuisines={restaurant.info.cuisines}
              costForTwo={restaurant.info.costForTwo}/> */}
          </Link>//Link is nothing but an anchor tag - under the hood link uses the <a>
        ))}
      </div>
    </div>
  );
};

export default Body;
