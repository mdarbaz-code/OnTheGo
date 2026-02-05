import { useState, useMemo } from "react";
import RestaurantCart from "../Core/components/RestaurantCart";
import restaurants from "../../data/restaurants";
import Input from "../UI/components/Input";
import { FiSearch } from "react-icons/fi";

const BrowseRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchLower) ||
      restaurant.cuisine.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* 🔶 STICKY HEADER */}
      <div className=" pt-6 pb-4 px-4 bg-gray-50/80 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#ffb80e] shadow-lg rounded-2xl p-6 sm:p-8 space-y-3 border border-amber-100 hover:shadow-xl transition-all duration-300">

            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              Browse Restaurants
            </h1>

            <p className="text-sm sm:text-base text-gray-700">
              Discover amazing restaurants and order your favorite food
            </p>

            <div className="pt-2">
              <Input
                type="text"
                placeholder="Search restaurants or cuisine..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FiSearch />}
                variant="filled"
                width="w-full sm:w-3/4 lg:w-2/3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🍽️ RESTAURANT LIST */}
      <div className="px-4 py-10">
        <div className="max-w-5xl mx-auto">

          {/* RESULT COUNT BADGE */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
              Restaurants
            </h2>

            <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-medium shadow-sm">
              {filteredRestaurants.length} found
            </span>
          </div>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fadeIn">
              {filteredRestaurants.map((item) => (
                <RestaurantCart key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-14 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-xl text-gray-500 font-medium">
                No restaurants found
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                Try searching different cuisine or name
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BrowseRestaurants;
