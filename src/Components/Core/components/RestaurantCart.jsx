import { Link } from "react-router-dom";

const RestaurantCart = ({ data }) => {
  return (
    <Link to={`/restaurants/${data.id}`}>
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-44 object-cover"
        />
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {data.delivery}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{data.name}</h3>

        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-yellow-500">★ {data.rating}</span>
          <span className="text-gray-500">({data.reviews})</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{data.cuisine}</span>
          <span>{data.time}</span>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Min. order: {data.minOrder}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default RestaurantCart;
