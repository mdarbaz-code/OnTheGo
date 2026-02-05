import { useState } from "react";
import Typography from "../../../UI/components/Typography";
import Button from "../../../UI/components/Button";
import Notification from "../../../UI/components/Notification";
import { useCart } from "../../../../context/CartContext";

const ItemCategory = ({ category, sortOption, activeFilter, searchText }) => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} added to cart!`);
  };

  const filteredItems = category.items
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
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

  if (!filteredItems.length) return null;

  return (
    <>
      {notification && (
        <Notification
          message={notification}
          type="success"
          onClose={() => setNotification(null)}
          duration={2000}
        />
      )}

      <div className="mt-8 sm:mt-10">
        <Typography
          variant="h2"
          size="lg sm:2xl"
          weight="bold"
          className="mb-2 px-1"
        >
          {category.categoryName}
        </Typography>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="px-3 py-2 sm:px-4 sm:py-3 flex flex-col flex-1 gap-2">
                {/* BADGES */}
                <div className="flex flex-wrap gap-1">
                  {item.isVeg && (
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Veg
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                      Special
                    </span>
                  )}
                </div>

                {/* TITLE + RATING */}
                <div className="flex justify-between items-start gap-2">
                  <Typography className="text-sm sm:text-base font-semibold line-clamp-1">
                    {item.name}
                  </Typography>

                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    ⭐ {item.rating}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <Typography className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                  {item.description}
                </Typography>

                {/* PRICE + BUTTON */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-base sm:text-lg font-bold text-orange-500">
                    ₹{item.price}
                  </span>

                  <Button
                    variant="primary"
                    size="xs sm:sm"
                    className=" px-3 sm:px-4 active:scale-95 transition-transform"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemCategory;
