import {useState,useEffect} from "react";
import resList from "../utils/data";
import Shimmer from "./ShimmerUI";

const RestaurantMenu = ()=>{
    // let [ListOfMenu , setListOfMenu] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER"
        );
      
        const json = await data.json();
        console.log(json);
    };
  
    // if (ListOfMenu === null){<Shimmer/>}

    return (
        <div className="menu">
            <h1>menu</h1>
        </div>
    )
};

export default RestaurantMenu ;