const Restaurant9 = {
  restaurant: {
    id: "9",
    name: "Walnut House",
    location: "Walnut House, Pune",
    rating: 4.5,
    deliveryTime: "25-35 mins",
    cuisines: ["Cafe", "Bakery", "Desserts", "Coffee"],
    costForTwo: 350
  },

  categories: [

    // ☕ Beverages
    {
      categoryId: "cat_beverages",
      categoryName: "Beverages",
      items: [
        {
          id: "wh_item_1",
          name: "Cold Coffee",
          description: "Classic chilled coffee with milk & ice",
          price: 149,
          isVeg: true,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_2",
          name: "Hot Cappuccino",
          description: "Rich espresso with milk foam",
          price: 159,
          isVeg: true,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1523475496153-3d6ccf5a9ef6?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "7 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "wh_item_3",
          name: "Mocha Latte",
          description: "Espresso with chocolate & milk",
          price: 169,
          isVeg: true,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1523942839745-784897ff25db?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_4",
          name: "Vanilla Milkshake",
          description: "Creamy classic vanilla shake",
          price: 159,
          isVeg: true,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6e96?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍰 Cakes & Desserts
    {
      categoryId: "cat_cakes_desserts",
      categoryName: "Cakes & Desserts",
      items: [
        {
          id: "wh_item_5",
          name: "Walnut Chocolate Cake",
          description: "Rich chocolate cake with walnut pieces",
          price: 299,
          isVeg: true,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1551024737-8c6a1fa8ca29?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "12 mins",
          inStock: true,
          offer: 15
        },
        {
          id: "wh_item_6",
          name: "Red Velvet Cake",
          description: "Classic red velvet with cream cheese",
          price: 319,
          isVeg: true,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1542827638-7b63eac0d085?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_7",
          name: "Tiramisu",
          description: "Coffee-flavoured Italian dessert",
          price: 339,
          isVeg: true,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1551022375-e20c9fa6a482?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "10 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "wh_item_8",
          name: "Cheesecake",
          description: "Creamy New York style cheesecake",
          price: 289,
          isVeg: true,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🥪 Snacks & Bites
    {
      categoryId: "cat_snacks",
      categoryName: "Snacks & Bites",
      items: [
        {
          id: "wh_item_9",
          name: "Veg Sandwich",
          description: "Fresh veg sandwich with sauces",
          price: 179,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_10",
          name: "Grilled Chicken Sandwich",
          description: "Grilled chicken with veggies",
          price: 199,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_11",
          name: "Fries",
          description: "Crispy golden french fries",
          price: 129,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "wh_item_12",
          name: "Veg Nuggets",
          description: "Crispy fried veg nuggets",
          price: 159,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        }
      ]
    }

  ]
};

export default Restaurant9;
