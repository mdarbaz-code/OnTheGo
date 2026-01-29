import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 text-lg mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link
          to="/restaurants"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Browse Restaurants
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
