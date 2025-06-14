import { CDN_URL } from "../utils/constants.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const styleCard = {
    color:"grey",
    wordWrap: "break-word",
    overflowWrap: "break-word"
};
//config driven UI
// if i send like resInfo then it will pass like an array and then resInfo.info becomes undefined
// so pass as {resInfo}
//Also we can use spread operator which makes easy to code
const ResCard = ({cloudinaryImageId,name,cuisines,avgRating,sla,aggregatedDiscountInfoV3})=>{
    // const { resInfo } = props;
    // The ?. operator is called optional chaining.
    // It safely accesses deeply nested properties without throwing an error if something is null or undefined.
    // const { cloudinaryImageId,name,costForTwo,cuisines,avgRating } = resInfo?.info;
   return (
  <div className="res-card w-64 sm:w-72 md:w-60 lg:w-56 p-4 bg-white rounded-2xl hover:shadow-lg transition duration-300 relative">
    <div className="relative">
      <img
        className="w-full h-40 object-cover rounded-xl mb-3"
        src={CDN_URL + cloudinaryImageId}
        alt="food"
      />
      
      {(aggregatedDiscountInfoV3?.header || aggregatedDiscountInfoV3?.subHeader) && (
        <h1 className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded font-[20px]">
          {(aggregatedDiscountInfoV3?.header || '') + ' ' + (aggregatedDiscountInfoV3?.subHeader || '')}
        </h1>
      )}
    </div>

    <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-[16px] text-[02060CEB] font-medium -mt-1">
      <FontAwesomeIcon icon={faStar} className="h-[10px] w-[10px] text-[#117911]" /> {avgRating} • {sla.slaString}
    </p>
    <p className="text-[16px] text-gray-500 mb-1">{cuisines.join(', ')}</p>
  </div>
);

};

export default ResCard;