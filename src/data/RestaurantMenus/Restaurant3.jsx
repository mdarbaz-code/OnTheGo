const Restaurant3 = {
  restaurant: {
    id: "crave_cafe_gulbarga",
    name: "Crave Cafe And Resto",
    location: "Gulbarga Locality, Gulbarga",
    rating: 4.0,
    deliveryTime: "30–45 mins",
    cuisines: ["Cafe", "Italian", "Pasta", "Pizza", "Beverages"],
    costForTwo: 400
  },

  categories: [

    // 🥗 Salads
    {
      categoryId: "cat_salads",
      categoryName: "Salads",
      items: [
        {
          id: "cr_item_1",
          name: "Cesar Chicken Salad",
          description: "Grilled chicken with greens & dressing",
          price: 249,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1569692183504-6cbf94a0e795?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_2",
          name: "Cesar Salad (Veg)",
          description: "Classic veg salad with dressing",
          price: 199,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_3",
          name: "Greek Chicken Salad",
          description: "Lemon dressing with chicken & veggies",
          price: 259,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_4",
          name: "Greek Salad (Veg)",
          description: "Fresh cucumber, onion & tomato",
          price: 219,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍟 Starters & Veg Snacks
    {
      categoryId: "cat_starters",
      categoryName: "Starters",
      items: [
        {
          id: "cr_item_5",
          name: "French Fries",
          description: "Crispy golden fries",
          price: 129,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_6",
          name: "Garlic Bread",
          description: "Toasted bread with garlic butter",
          price: 159,
          isVeg: true,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1606755962773-d324e2d53f7b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_7",
          name: "Peri Peri Fries",
          description: "Spicy seasoned fries",
          price: 149,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_8",
          name: "Chicken Nuggets",
          description: "Crunchy fried chicken bites",
          price: 199,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍕 Pizzeria
    {
      categoryId: "cat_pizza",
      categoryName: "Pizzeria",
      items: [
        {
          id: "cr_item_9",
          name: "Corn & Cheese Pizza",
          description: "Sweet corn with rich cheese",
          price: 249,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_10",
          name: "Double Chicken Pizza",
          description: "Butter chicken flavour & onion",
          price: 279,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1548365328-9f547fb0953f?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_11",
          name: "Garden Veg Pizza",
          description: "Veg toppings with olives & paprika",
          price: 269,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_12",
          name: "Peri Peri Chicken Pizza",
          description: "Spicy roasted chicken pizza",
          price: 289,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍝 Pasta
    {
      categoryId: "cat_pasta",
      categoryName: "Pasta",
      items: [
        {
          id: "cr_item_13",
          name: "Arrabiata Pasta (Penne)",
          description: "Spicy red sauce penne",
          price: 219,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_14",
          name: "Chicken Arrabiata Pasta (Spaghetti)",
          description: "Spicy chicken spaghetti",
          price: 259,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_15",
          name: "Chicken Pink Sauce Pasta (Penne)",
          description: "Creamy pink sauce pasta",
          price: 249,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_16",
          name: "Triple Cheese Pasta",
          description: "Creamy white sauce pasta",
          price: 239,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🥤 Milkshakes & Cold Coffee
    {
      categoryId: "cat_shakes",
      categoryName: "Milkshakes & Cold Coffee",
      items: [
        {
          id: "cr_item_17",
          name: "Vanilla Frappe",
          description: "Classic cold coffee with vanilla",
          price: 149,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "8 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_18",
          name: "Nutella Frappe",
          description: "Chocolate hazelnut cold coffee",
          price: 169,
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
          id: "cr_item_19",
          name: "Oreo Frappe",
          description: "Creamy Oreo shake",
          price: 159,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6e96?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "cr_item_20",
          name: "Rich Chocolate Shake",
          description: "Thick chocolate milkshake",
          price: 159,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6e96?w=400&auto=format&fit=crop&q=60",
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

export default Restaurant3;
