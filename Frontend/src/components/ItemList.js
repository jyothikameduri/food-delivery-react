import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const getItemQuantity = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="px-4">
      {items.map((item) => {
        const product = item.card?.info || item;
        const quantity = getItemQuantity(product.id);

        if (!product?.id) return null;

        return (
          <div key={product.id} className="flex justify-between items-start p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="w-3/4 pr-4">
              <div className="flex items-center gap-2">
                
                {product.isVeg === 1 ? (
                  <div className="w-6 h-6 rounded-md border-3 border-green-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-600" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-md border-3 border-red-500 flex items-center justify-center">
                    <div
                      className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-red-500 border-solid"
                      style={{ borderLeftColor: "transparent", borderRightColor: "transparent" }}
                    />
                  </div>
                )}
                {product.isBestseller && (
                  <span className="text-yellow-600 bg-yellow-100 text-xs font-semibold px-2 py-0.5 rounded">
                    Bestseller
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-gray-800 ">
              {product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">₹{(product.price || product.defaultPrice) / 100}</p>
              {product?.ratings?.aggregatedRating?.rating && (
                <span className="flex items-center gap-1 text-sm font-medium text-[#117911]">
                  <FontAwesomeIcon icon={faStar} className="h-[10px] w-[10px]" />
                  {product.ratings.aggregatedRating.rating}
                </span>
              )}
              <p className="text-xs text-gray-500 mt-2">{product.description}</p>
            </div>

            <div className="relative min-w-[120px] min-h-[100px] flex flex-col items-center justify-center">
              {product.imageId && (
                <img
                  src={CDN_URL + product.imageId}
                  alt={product.name}
                  className="w-[120px] h-[100px] object-cover rounded-lg shadow-sm"
                />
              )}

              <div className="mt-2 flex items-center gap-2">
                {quantity === 0 ? (
                  <button
                    className="bg-white px-4 py-1 text-green-600 text-sm font-semibold border border-gray-300 shadow-md rounded-md hover:bg-green-50"
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add 
                  </button>
                ) : (
                  <div className="flex items-center gap-2 border px-2 py-1 rounded-md shadow">
                    <button onClick={() => dispatch(removeItem({ id: product.id }))}>−</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(addItem(product))}>+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;