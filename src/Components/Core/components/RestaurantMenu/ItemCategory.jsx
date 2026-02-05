import { useMemo } from "react";
import Typography from "../../../UI/components/Typography";
import Button from "../../../UI/components/Button";

const ItemCategory = ({ category, sortOption, activeFilter, searchText }) => {
  const filteredItems = useMemo(() => {
    return category.items
      .filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(searchText.toLowerCase());

        const matchesChip =
          activeFilter === "All" ||
          (activeFilter === "Popular" && item.isPopular) ||
          (activeFilter === "Specials" && item.isSpecial) ||
          (activeFilter === "Vegetarian" && item.isVeg);

        return matchesSearch && matchesChip;
      })
      .sort((a, b) => {
        if (sortOption === "lowToHigh") return a.price - b.price;
        if (sortOption === "highToLow") return b.price - a.price;
        return 0;
      });
  }, [category.items, searchText, activeFilter, sortOption]);

  if (filteredItems.length === 0) {
    return (
      <div className="mt-6 text-center text-gray-400 text-sm">
        No items found in this category 😕
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Typography variant="h2" size="lg" weight="bold" className="mb-1">
        {category.categoryName}
      </Typography>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_6px_22px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
                ⭐ {item.rating || "4.2"}
              </div>

              {/* Offer Badge */}
              {item.offer > 0 && (
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow">
                  {item.offer}% OFF
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="px-4 flex flex-col flex-1">
              {!item.inStock && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center text-red-600 font-semibold text-sm z-10 rounded-3xl">
                  Out of Stock
                </div>
              )}

              {/* TITLE */}
              <Typography
                variant="h3"
                weight="semibold"
                className="text-base leading-snug line-clamp-1 text-gray-800"
              >
                {item.name}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                size="sm"
                color="muted"
                className=" line-clamp-1 text-gray-500"
              >
                {item.description}
              </Typography>

              {/* SUB INFO */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  ⏱ {item.prepTime}
                </span>
                {item.isVeg && (
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    Veg
                  </span>
                )}
              </div>

              {/* PRICE + BUTTON */}
              <div className="mt-auto pt-4 mb-2 flex items-center justify-between">
                <span className="text-lg font-bold text-orange-500">
                  ₹{item.price}
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  disabled={!item.inStock}
                  className="rounded-full px-2 shadow-md"
                >
                  {item.inStock ? "Add" : "Unavailable"}
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
