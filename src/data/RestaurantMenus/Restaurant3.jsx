const Restaurant3 = {
  restaurant: {
    id: "3",
    name: "Crave Cafe And Resto",
    location: "Gulbarga Locality, Gulbarga",
    rating: 4.0,
    deliveryTime: "30–45 mins",
    cuisines: ["Cafe", "Italian", "Pasta", "Pizza", "Beverages"],
    costForTwo: 400,
  },

  categories: [
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
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
          prepTime: "12 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_2",
          name: "Cesar Salad (Veg)",
          description: "Classic veg salad with dressing",
          price: 199,
          isVeg: true,
          rating: 4.0,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
          prepTime: "10 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_3",
          name: "Greek Chicken Salad",
          description: "Lemon dressing with chicken & veggies",
          price: 259,
          isVeg: false,
          rating: 4.3,
          image:
            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80",
          prepTime: "14 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_4",
          name: "Greek Salad (Veg)",
          description: "Fresh cucumber, onion & tomato",
          price: 219,
          isVeg: true,
          rating: 4.1,
          image:
            "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80",
          prepTime: "12 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },

    {
      categoryId: "cat_starters",
      categoryName: "Starters",
      items: [
        {
          id: "cr_item_5",
          name: "French Fries",
          image:
            "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
          description: "Crispy golden fries",
          price: 129,
          isVeg: true,
          rating: 4.2,
          prepTime: "10 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_6",
          name: "Garlic Bread",
          image:
            "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-5.jpg",
          description: "Toasted bread with garlic butter",
          price: 159,
          isVeg: true,
          rating: 4.3,
          prepTime: "12 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_7",
          name: "Peri Peri Fries",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
          description: "Spicy seasoned fries",
          price: 149,
          isVeg: true,
          rating: 4.0,
          prepTime: "10 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_8",
          name: "Chicken Nuggets",
          image:
            "https://www.proofdc.com/wp-content/uploads/media/02/58716144-crispy-baked-chicken-nuggets-recipe-proofdc.jpg",
          description: "Crunchy fried chicken bites",
          price: 199,
          isVeg: false,
          rating: 4.1,
          prepTime: "14 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },

    {
      categoryId: "cat_pizza",
      categoryName: "Pizzeria",
      items: [
        {
          id: "cr_item_9",
          name: "Corn & Cheese Pizza",
          image:
            "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
          description: "Sweet corn with rich cheese",
          price: 249,
          isVeg: true,
          rating: 4.1,
          prepTime: "18 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_10",
          name: "Double Chicken Pizza",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
          description: "Butter chicken flavour & onion",
          price: 279,
          isVeg: false,
          rating: 4.2,
          prepTime: "20 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_11",
          name: "Garden Veg Pizza",
          image:
            "https://th.bing.com/th/id/OIP.XrsxLYRi8yaS-MQzt7yutAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Veg toppings with olives & paprika",
          price: 269,
          isVeg: true,
          rating: 4.0,
          prepTime: "18 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_12",
          name: "Peri Peri Chicken Pizza",
          image:
            "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80",
          description: "Spicy roasted chicken pizza",
          price: 289,
          isVeg: false,
          rating: 4.3,
          prepTime: "20 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },

    {
      categoryId: "cat_pasta",
      categoryName: "Pasta",
      items: [
        {
          id: "cr_item_13",
          name: "Arrabiata Pasta",
          image:
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80",
          description: "Spicy red sauce penne",
          price: 219,
          isVeg: true,
          rating: 4.0,
          prepTime: "18 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_14",
          name: "Chicken Arrabiata Pasta",
          image:
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
          description: "Spicy chicken spaghetti",
          price: 259,
          isVeg: false,
          rating: 4.1,
          prepTime: "20 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },

    {
      categoryId: "cat_shakes",
      categoryName: "Milkshakes & Cold Coffee",
      items: [
        {
          id: "cr_item_17",
          name: "Vanilla Frappe",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
          description: "Classic cold coffee with vanilla",
          price: 149,
          isVeg: true,
          rating: 4.0,
          prepTime: "8 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "cr_item_18",
          name: "Nutella Frappe",
          image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
          description: "Chocolate hazelnut cold coffee",
          price: 169,
          isVeg: true,
          rating: 4.3,
          prepTime: "10 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },
  ],
};

export default Restaurant3;
