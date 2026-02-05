import { useMemo } from "react";
import Typography from "../../../UI/components/Typography";
import Button from "../../../UI/components/Button";

const ItemCategory = ({ category, sortOption, activeFilter, searchText }) => {
  const filteredItems = useMemo(() => {
    return category.items
      .filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter((item) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Popular") return item.isPopular;
        if (activeFilter === "Specials") return item.isSpecial;
        if (activeFilter === "Vegetarian") return item.isVeg;
      })
      .sort((a, b) => {
        if (sortOption === "lowToHigh") return a.price - b.price;
        if (sortOption === "highToLow") return b.price - a.price;
        return 0;
      });
  }, [category.items, searchText, activeFilter, sortOption]);

  if (!filteredItems.length) return null;

  return (
    <div className="mt-8">
      <Typography variant="h2" size="lg sm:xl" weight="bold" className="mb-2">
        {category.categoryName}
      </Typography>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full shadow">
                ⭐ {item.rating}
              </div>

              {item.offer > 0 && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.offer}% OFF
                </div>
              )}
            </div>

            <div className="px-3 py-2 sm:px-4 sm:py-3 flex flex-col flex-1">
              <Typography className="text-sm sm:text-base font-semibold line-clamp-1">
                {item.name}
              </Typography>

              <Typography className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                {item.description}
              </Typography>

              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                <span>⏱ {item.prepTime}</span>
                {item.isVeg && <span className="text-green-600">Veg</span>}
              </div>

              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-base sm:text-lg font-bold text-orange-500">
                  ₹{item.price}
                </span>

                <Button variant="primary" size="xs sm:sm" className="rounded-full px-3 sm:px-4">
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategory;
