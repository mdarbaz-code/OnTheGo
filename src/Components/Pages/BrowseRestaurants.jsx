import RestaurantCart from "../Core/components/RestaurantCart";
import restaurants from "../../data/restaurants";


const BrowseRestaurants = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-12 px-6">
        <h1 className="text-4xl font-bold">Browse Restaurants</h1>
        <p className="mt-2">
          Discover amazing restaurants and order your favorite food
        </p>

        <input
          type="text"
          placeholder="Search restaurants or cuisine..."
          className="mt-6 w-full max-w-3xl px-5 py-3 rounded-lg text-gray-700 outline-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          {restaurants.length} Restaurants Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((item) => (
            <RestaurantCart key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseRestaurants;
