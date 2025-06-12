import { useState } from "react";

const MenuFilters = ({ category, setFilteredCategory }) => {
  const [filter, setFilter] = useState({ veg: false, nonVeg: false, bestseller: false });

  const applyFilters = (updatedFilter) => {
    setFilter(updatedFilter);

    const filtered = category.map((cat) => {
      let items = cat.card.card.itemCards || [];

      if (updatedFilter.veg) {
        items = items.filter((item) => item.card?.info?.isVeg === 1);
      } else if (updatedFilter.nonVeg) {
        items = items.filter((item) => item.card?.info?.isVeg !== 1);
      }

      if (updatedFilter.bestseller) {
        items = items.filter((item) => item.card?.info?.isBestseller === true);
      }

      return {
        ...cat,
        card: {
          ...cat.card,
          card: {
            ...cat.card.card,
            itemCards: items,
          },
        },
      };
    });

    setFilteredCategory(filtered);
  };

  return (
    <div className="flex gap-4 mt-6 px-4">
      {/* Veg Toggle */}
      <div
        onClick={() => applyFilters({ ...filter, veg: !filter.veg, nonVeg: false })}
        className={`flex items-center border-2 rounded-full px-4 py-2 w-24 justify-center cursor-pointer ${
          filter.veg ? "border-green-600 bg-green-100" : "border-gray-300 bg-white"
        }`}
      >
        <div className="w-6 h-6 rounded-md border-3 border-green-600 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-green-600" />
        </div>
      </div>

      {/* Non-Veg Toggle */}
      <div
        onClick={() => applyFilters({ ...filter, nonVeg: !filter.nonVeg, veg: false })}
        className={`flex items-center border-2 rounded-full px-4 py-2 w-24 justify-center cursor-pointer ${
          filter.nonVeg ? "border-red-500 bg-red-100" : "border-gray-300 bg-white"
        }`}
      >
        <div className="w-6 h-6 rounded-md border-3 border-red-500 flex items-center justify-center">
          <div
            className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-red-500 border-solid"
            style={{
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            }}
          />
        </div>
      </div>

      {/* Bestseller Button */}
      <button
        className={`border px-4 py-2 rounded-3xl text-sm transition ${
          filter.bestseller ? "border-black text-black" : "border-gray-300 text-gray-700 hover:border-black"
        }`}
        onClick={() => applyFilters({ ...filter, bestseller: !filter.bestseller })}
      >
        Bestseller
      </button>
    </div>
  );
};

export default MenuFilters;
