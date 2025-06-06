import {MENU_API} from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (menuId)=>{
    const [ListOfMenu, setListOfMenu] = useState(null);

    useEffect(() => {
    fetchMenu();
    }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + menuId
    );

    const json = await data.json();
    console.log(json.data); 
    setListOfMenu(json.data);
  };

  return ListOfMenu;
}

export default useRestaurantMenu ;