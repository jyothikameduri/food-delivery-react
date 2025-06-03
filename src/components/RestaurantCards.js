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
        <div className="res-card">
            <img src={
                    CDN_URL+
                    cloudinaryImageId
                     } alt="food"></img>
            <h3>{name}</h3>
            <p>{costForTwo}</p>
            <p style={styleCard}>{cuisines.join(',')}</p>
            <p>{avgRating}</p>
        </div>
    )
};

export default ResCard;