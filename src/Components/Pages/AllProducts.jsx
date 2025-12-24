import React, { useMemo, useState } from "react";
import Product from "../Core/Product.jsx";
const products = [
  {
    id: 1,
    image: "https://tse3.mm.bing.net/th/id/OIP.Zgim-HnEgdzBq8UjHVaUygHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Margherita Pizza",
    description: "Classic delight with mozzarella cheese.",
    price: 299,
    discount: 50,
    isVeg: true,
    tag: "Hot Deal",
    isNew: true,
    isAvailable: true,
    category: "Pizza",
  },
  {
    id: 2,
    image: "https://bing.com/th?id=OSK.581d09f1d1d576171a3a1099b007151c",
    name: "Chicken Burger",
    description: "Juicy grilled chicken patty with sauces.",
    price: 199,
    discount: 20,
    isVeg: false,
    tag: "Best Selling",
    isNew: false,
    isAvailable: true,
    category: "Burger",
  },
  {
    id: 3,
    image: "https://bing.com/th?id=OSK.604d9a439cb00d32875d08842ef36ebb",
    name: "Paneer Tikka",
    description: "Spicy grilled paneer cubes with chutney.",
    price: 249,
    discount: 30,
    isVeg: true,
    tag: "Best Selling",
    isNew: false,
    isAvailable: true,
    category: "Starter",
  },
  {
    id: 4,
    image: "https://bing.com/th?id=OSK.3e81919620d261070b3fa3eacb8ccae7",
    name: "Fish Curry",
    description: "Traditional coastal curry with fresh fish.",
    price: 349,
    discount: 40,
    isVeg: false,
    tag: "Hot Deal",
    isNew: true,
    isAvailable: true,
    category: "Curry",
  },
  {
    id: 5,
    image: "https://www.cookwithkushi.com/wp-content/uploads/2015/04/best_vegetable_biryani_recipe.jpg",
    name: "Veg Biryani",
    description: "Aromatic rice cooked with fresh vegetables.",
    price: 299,
    discount: 25,
    isVeg: true,
    tag: "Best Selling",
    isNew: true,
    isAvailable: true,
    category: "Rice",
  },
  {
    id: 6,
    image: "https://www.spicypunch.com/wp-content/uploads/2020/12/mutton-rogan-josh-768x512.jpg",
    name: "Mutton Rogan Josh",
    description: "Rich Kashmiri curry with tender mutton.",
    price: 399,
    discount: 60,
    isVeg: false,
    tag: "Hot Deal",
    isNew: false,
    isAvailable: true,
    category: "Curry",
  },
  {
    id: 7,
    image: "https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg",
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with veggies.",
    price: 149,
    discount: 10,
    isVeg: true,
    tag: "New Arrival",
    isNew: true,
    isAvailable: true,
    category: "Starter",
  },
  {
    id: 8,
    image: "https://troovyfoods.com/cdn/shop/articles/54714340_1024x1024.webp?v=1662827923",
    name: "Grilled Sandwich",
    description: "Cheese-loaded sandwich with veggies.",
    price: 129,
    discount: 15,
    isVeg: true,
    tag: "Best Selling",
    isNew: false,
    isAvailable: false,
    category: "Sandwich",
  },
  {
    id: 9,
    image: "https://tse4.mm.bing.net/th/id/OIP.N797GDo45POduGKvdr8FQwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Butter Chicken",
    description: "Creamy tomato gravy with tender chicken.",
    price: 349,
    discount: 50,
    isVeg: false,
    tag: "Hot Deal",
    isNew: false,
    isAvailable: true,
    category: "Curry",
  },
  {
    id: 10,
    image: "https://tse2.mm.bing.net/th/id/OIP.cr8GcoK81vS-tY9fPjO4AwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Chocolate Brownie",
    description: "Rich chocolate dessert with nuts.",
    price: 99,
    discount: 5,
    isVeg: true,
    tag: "Best Selling",
    isNew: true,
    isAvailable: true,
    category: "Dessert",
  },
];

const AllProducts = () => {
  const [sortBy, setSortBy] = useState("price");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      // Always push unavailable items to bottom
      if (a.isAvailable !== b.isAvailable) {
        return a.isAvailable ? -1 : 1;
      }

      switch (sortBy) {
        case "price":
          return a.price - a.discount - (b.price - b.discount);
        case "best":
          return b.tag === "Best Selling" ? 1 : -1;
        case "veg":
          return a.isVeg === b.isVeg ? 0 : a.isVeg ? -1 : 1;
        case "newest":
          return b.isNew - a.isNew;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });
  }, [sortBy]);

  const filterBtn = (value, label) => (
    <button
      onClick={() => setSortBy(value)}
      className={`px-4 py-2 rounded text-sm font-semibold transition
        ${
          sortBy === value
            ? "bg-red-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Resturant Name <br /> Explore Our Menu
        </h1>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-6 sticky top-0 bg-gray-50 py-3 z-10">
          {filterBtn("price", "Price")}
          {filterBtn("best", "Best Selling")}
          {filterBtn("veg", "Veg First")}
          {filterBtn("newest", "New Arrivals")}
          {filterBtn("category", "Category")}
        </div>

        {/* Product Grid */}
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
