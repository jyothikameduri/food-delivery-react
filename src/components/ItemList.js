import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  return (
    <div className="px-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          {/* LEFT: Name, price, description */}
          <div className="w-3/4 pr-4">
            <h3 className="text-base font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {item.card.info.description}
            </p>
          </div>

          {/* RIGHT: Image + Button */}
          <div className="relative min-w-[120px]">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-[120px] h-[100px] object-cover rounded-lg shadow-sm"
              />
            )}
            <div className="absolute left-1/2 bottom-[-12px] transform -translate-x-1/2">
              <button className="bg-white px-4 py-1 text-green-600 text-sm font-semibold border border-gray-300 shadow-md rounded-md hover:bg-green-50 whitespace-nowrap">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
