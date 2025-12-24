import React, { useState } from "react";

const Product = ({
  image,
  name,
  description,
  price,
  discount,
  isVeg,
  tag,
  isNew,
  isAvailable,
  category,
}) => {
  const [liked, setLiked] = useState(false);

  const finalPrice = price - discount;

  return (
    <div className=" bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden w-68 ">
      {/* Image Section */}
      <div className="relative aspect-4/3">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Dark overlay when not available */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              Currently Unavailable
            </span>
          </div>
        )}

        {/* Tag */}
        {tag && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {tag}
          </span>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-gray-600">{category}</span>
        </div>

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}

        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 ${liked ? "text-red-600" : "text-gray-400"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
            {name}
          </h3>

          {/* Veg / Non-Veg */}
          <span
            className={`w-3 h-3 mt-1 rounded-full ${
              isVeg ? "bg-green-600" : "bg-red-600"
            }`}
          />
        </div>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description.trim().split(/\s+/).length > 4
            ? description.trim().split(/\s+/).slice(0, 4).join(" ") + "..."
            : description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">₹{finalPrice}</span>

          {discount > 0 && (
            <>
              <span className="text-sm text-gray-400 line-through">
                ₹{price}
              </span>
              <span className="text-xs font-semibold text-green-600">
                SAVE ₹{discount}
              </span>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex  mt-2">
          <button
            disabled={!isAvailable}
            className={`flex-1 px-4 py-3 text-md font-semibold transition rounded rounded-r-none
      ${
        isAvailable
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
          >
            Add
          </button>

          <button
            disabled={!isAvailable}
            className={`flex-1 px-4 py-3 text-md font-semibold transition rounded rounded-l-none 
      ${
        isAvailable
          ? "border border-red-600 text-red-600 hover:bg-red-50"
          : "border border-gray-300 text-gray-400 cursor-not-allowed"
      }`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
