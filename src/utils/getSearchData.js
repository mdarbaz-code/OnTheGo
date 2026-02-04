import RestaurantMenuData from "../data/RestaurantMenus/index.js";

export const getSearchData = () => {
  const restaurants = Object.values(RestaurantMenuData);

  // Use a Map to avoid duplicates
  const searchMap = new Map();

  restaurants.forEach((r) => {
    // Add restaurant itself (dedupe by restoId)
    if (!searchMap.has(r.restaurant.id)) {
      searchMap.set(r.restaurant.id, {
        type: "restaurant",
        restoId: r.restaurant.id,
        name: r.restaurant.name,
        location: r.restaurant.location,
      });
    }

    // Add each food item (dedupe by item.id)
    r.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        if (!searchMap.has(item.id)) {
          searchMap.set(item.id, {
            type: "food",
            id: item.id,
            name: item.name,
            restaurantName: r.restaurant.name,
            restoId: r.restaurant.id,
            price: item.price,
          });
        }
      });
    });
  });

  // Return unique values
  return Array.from(searchMap.values());
};
