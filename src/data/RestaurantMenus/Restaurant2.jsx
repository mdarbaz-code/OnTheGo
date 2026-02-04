const Restaurant2 = {
  restaurant: {
    id: "2",
    name: "Roastery Lounge Cafe",
    location: "Old RTO Cross, Mominpura, Kalaburagi",
    rating: 4.1,
    deliveryTime: "30-45 mins",
    cuisines: ["Cafe", "Continental", "Italian", "Burgers", "Sandwiches"],
    costForTwo: 350
  },

  categories: [

    // 🍟 Appetizers
    {
      categoryId: "cat_appetizers",
      categoryName: "Appetizers",
      items: [
        {
          id: "rl_item_1",
          name: "Cheesy Fries",
          description: "Crispy fries topped with melted cheese",
          price: 194,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_2",
          name: "Peri Peri French Fries",
          description: "Seasoned spicy fries",
          price: 150,
          isVeg: true,
          rating: 3.7,
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_3",
          name: "French Fries",
          description: "Classic crispy golden fries",
          price: 129,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1548365328-9f547fb0953f?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_4",
          name: "Chicken Nuggets",
          description: "Crunchy fried chicken bites",
          price: 199,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍕 Pizza
    {
      categoryId: "cat_pizza",
      categoryName: "Pizza",
      items: [
        {
          id: "rl_item_5",
          name: "Margherita Pizza",
          description: "Classic cheese pizza",
          price: 249,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "rl_item_6",
          name: "Farmhouse Pizza",
          description: "Loaded with veggies and cheese",
          price: 279,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_7",
          name: "Chicken Pizza",
          description: "Grilled chicken toppings",
          price: 299,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_8",
          name: "Cheese Burst Pizza",
          description: "Extra cheese crust",
          price: 319,
          isVeg: true,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1548365328-9f547fb0953f?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "25 mins",
          inStock: true,
          offer: 15
        }
      ]
    },

    // 🍔 Burgers & Sandwiches
    {
      categoryId: "cat_burgers_sandwiches",
      categoryName: "Burgers & Sandwiches",
      items: [
        {
          id: "rl_item_9",
          name: "Classic Veg Burger",
          description: "Veg patty with lettuce and sauce",
          price: 169,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1606755962773-d324e2d53f7b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_10",
          name: "Grilled Chicken Burger",
          description: "Grilled chicken with fresh veggies",
          price: 199,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "16 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_11",
          name: "Paneer Grilled Sandwich",
          description: "Grilled paneer with veggies",
          price: 179,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "rl_item_12",
          name: "Chicken Grilled Sandwich",
          description: "Grilled chicken with sauces",
          price: 199,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // ☕ Beverages (Cold Coffee & More)
    {
      categoryId: "cat_beverages",
      categoryName: "Beverages",
      items: [
        {
          id: "rl_item_13",
          name: "Classic Cold Coffee",
          description: "Chilled fresh coffee with milk",
          price: 139,
          isVeg: true,
          rating: 3.9,
          image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_14",
          name: "Vanilla Milkshake",
          description: "Rich creamy vanilla shake",
          price: 149,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6e96?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_15",
          name: "Oreo Milkshake",
          description: "Oreo blended milkshake",
          price: 159,
          isVeg: true,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1588918888915-5beebfdbb76f?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rl_item_16",
          name: "Caramel Cold Coffee",
          description: "Cold coffee with caramel swirl",
          price: 149,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1565120130296-0599c892d8b8?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        }
      ]
    }
  ]
};

export default Restaurant2;
