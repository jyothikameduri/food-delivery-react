import ResCard from "./RestaurantCards";
import {useState , useEffect} from 'react';
import Shimmer from "./ShimmerUI";
import "../index.css";
import {Link} from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [searchName,setsearchName] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [showUnder300, setShowUnder300] = useState(false);
  const [showHighRated, setShowHighRated] = useState(false);


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
      <div className="flex items-center justify-center space-x-6 p-6">
        {/* Search input + button */}
        <div className="flex items-center space-x-2">
          <input
            className="border border-gray-300 rounded-[1rem] px-[10rem] py-[1rem] text-2xl "
            placeholder="Enter the Restaurant name"
            value={searchName}
            onChange={(e) => setsearchName(e.target.value)}
          />
          <button
            className="bg-[#e03618] text-white px-[3rem] py-[1rem] rounded-[1rem] hover:bg-red-500 text-base md:text-lg font-medium"
            onClick={() => {
              const filteredNames = ListOfRestaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchName.toLowerCase())
              );
              setfilteredRestaurants(filteredNames);
            }}
          >
            Search
          </button>
        </div>
        <button
            className={`border rounded-lg px-4 py-[1rem] ${
              showUnder300 ? "border-red-500" : "hover:border-red-400"
            } text-base md:text-lg font-medium`}
              onClick={() => {
                const newState = !showUnder300;
                setShowUnder300(newState);

                if (newState) {
                  const filtered = ListOfRestaurants.filter((restaurant) => {
                    const costStr = restaurant.info.costForTwo;
                    const match = costStr.match(/\d+/);
                    const cost = match ? parseInt(match[0]) : 0;
                    return cost < 300;
                  });
                  setfilteredRestaurants(filtered);
                  setShowHighRated(false); // Turn off other filters if needed
                } else {
                  setfilteredRestaurants(ListOfRestaurants); // Reset
                }
              }}
            >
              Less than ₹300
            </button>

            <button
              className={`border rounded-lg px-4 py-[1rem] ${
                showHighRated ? "border-red-500" : "hover:border-red-400"
              } text-base md:text-lg font-medium`}
              onClick={() => {
                const newState = !showHighRated;
                setShowHighRated(newState);

                if (newState) {
                  const filtered = ListOfRestaurants.filter(
                    (restaurant) => restaurant.info.avgRating >= 4.0
                  );
                  setfilteredRestaurants(filtered);
                  setShowUnder300(false); // Optional
                } else {
                  setfilteredRestaurants(ListOfRestaurants);
                }
              }}
            >
              Ratings 4.0+
            </button>
        {/* <button
          className="border rounded-lg  px-4 py-[1rem] hover:border-red-400 text-base md:text-lg font-medium">
          Pure Veg
        </button>
        <button
          className="border rounded-lg  px-4 py-[1rem] hover:border-red-400 text-base md:text-lg font-medium">
          Non Veg
        </button>
   */}
      </div>

      <div className="res-container flex flex-wrap gap-6 justify-center p-4 rounded-2xl bg-white shadow-sm my-10 ">
        {filteredRestaurants.map((restaurant) => (
          <Link className="restaurants-link" key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}>
            <ResCard {...restaurant.info} />
          </Link>//Link is nothing but an anchor tag - under the hood link uses the <a>
        ))}
      </div>
    </div>
  );
};

export default Body;
