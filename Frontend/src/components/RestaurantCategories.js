import ItemList from "./ItemList";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const RestaurantCategories = ({ data }) => {
    const [showItems, setshowItems] = useState(false);

    const handleClick = () => {
        setshowItems(!showItems);
    };

    return (
        <div>
            <div className="cursor-pointer text-lg font-semibold shadow-lg p-5">
                <div className="flex justify-between" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>
                        {showItems 
                            ? <FontAwesomeIcon icon={faAngleUp} /> 
                            : <FontAwesomeIcon icon={faAngleDown} />
                        }
                    </span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategories;
