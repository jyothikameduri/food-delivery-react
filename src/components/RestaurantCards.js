import { CDN_URL } from "../utils/constants.js";

const styleCard = {
    color:"grey",
    wordWrap: "break-word",
    overflowWrap: "break-word"
};
//config driven UI
// if i send like resInfo then it will pass like an array and then resInfo.info becomes undefined
// so pass as {resInfo}
//Also we can use spread operator which makes easy to code
const ResCard = ({cloudinaryImageId,name,costForTwo,cuisines,avgRating})=>{
    // const { resInfo } = props;
    // The ?. operator is called optional chaining.
    // It safely accesses deeply nested properties without throwing an error if something is null or undefined.
    // const { cloudinaryImageId,name,costForTwo,cuisines,avgRating } = resInfo?.info;
    return(
        <div className="res-card w-64 sm:w-72 md:w-60 lg:w-56 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <img
                className="w-full h-40 object-cover rounded-xl mb-3"
                src={CDN_URL + cloudinaryImageId}
                alt="food"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
            <p className="text-sm text-gray-500 mb-1">{costForTwo}</p>
            <p className="text-sm text-gray-500 mb-1">{cuisines.join(', ')}</p>
            <p className="text-sm text-green-600 font-medium">{avgRating} ⭐</p>
        </div>

    )
};

export default ResCard;