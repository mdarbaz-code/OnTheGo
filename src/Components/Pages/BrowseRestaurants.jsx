import { useState } from "react";
import RestaurantCart from "../Core/components/RestaurantCart";
import restaurants from "../../data/restaurants";


const BrowseRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(searchLower) ||
      restaurant.cuisine.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#ffb80e] text-gray-800 py-12 px-6">
        <h1 className="text-4xl font-bold">Browse Restaurants</h1>
        <p className="mt-2">
          Discover amazing restaurants and order your favorite food
        </p>

        <input
          type="text"
          placeholder="Search restaurants or cuisine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-6 w-full max-w-3xl px-5 py-3 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          {filteredRestaurants.length} Restaurants Found
        </h2>

        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((item) => (
              <RestaurantCart key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No restaurants found matching "{searchTerm}"</p>
            <p className="text-gray-400 mt-2">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseRestaurants;
