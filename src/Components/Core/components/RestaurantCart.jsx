import { Link } from "react-router-dom";

const RestaurantCart = ({ data }) => {
  return (
    <Link to={`/restaurants/${data.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* IMAGE SECTION */}
        <div className="relative overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          {data.discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
              {data.discount} OFF
            </span>
          )}

          {/* Delivery Badge */}
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">
            {data.delivery}
          </span>

          {/* Status */}
          <span className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow">
            {data.status}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          {/* NAME */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
            {data.name}
          </h3>

          {/* RATING + REVIEWS */}
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-yellow-500 font-semibold">
              ★ {data.rating}
            </span>
            <span className="text-gray-400 text-xs">
              ({data.reviews} reviews)
            </span>
          </div>

          {/* CUISINE + TIME */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="line-clamp-1">{data.cuisine}</span>
            <span className="whitespace-nowrap font-medium text-gray-700">
              {data.time}
            </span>
          </div>

          {/* MIN ORDER */}
          <p className="text-xs text-gray-500 pt-1">
            Min. order: <span className="font-medium">{data.minOrder}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCart;
