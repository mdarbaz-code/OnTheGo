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
    // Show notification
    setNotification(`${item.name} added to cart!`);
  };

  const filteredItems = category.items
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

  if (filteredItems.length === 0) return null;

  return (
    <>
      {notification && (
        <Notification
          message={notification}
          type="warning"
          onClose={() => setNotification(null)}
          duration={2000}
        />
      )}
      <div className="mt-10">
        <Typography variant="h2" size="2xl" weight="bold">
          {category.categoryName}
        </Typography>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden 
  shadow-[0_8px_24px_rgba(0,0,0,0.06)] 
  hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] 
  transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col grow space-y-3">
                {/* BADGES */}
                <div className="flex gap-2 flex-wrap h-7 items-center">
                  {item.isVeg && (
                    <span className="text-[11px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      🥦 Veg
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="text-[11px] font-medium bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      ⭐ Popular
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="text-[11px] font-medium bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      ⚡ Special
                    </span>
                  )}
                </div>

                {/* TITLE + RATING */}
                <div className="flex justify-between gap-2 items-center min-h-12">
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className="leading-snug line-clamp-2"
                  >
                    {item.name}
                  </Typography>

                  <div className="flex items-center gap-1 text-sm text-blue-600">
                    ⭐ <span>{item.rating || "4.2"}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <Typography size="xs" color="muted" className="line-clamp-2">
                  {item.description}
                </Typography>

                {/* PRICE + BUTTON */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <Typography weight="bold" size="lg" className="text-orange-500">
                    ₹{item.price}
                  </Typography>

                  <Button
                    variant="primary"
                    size="xs"
                    className="rounded-full px-5 shadow-md"
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
