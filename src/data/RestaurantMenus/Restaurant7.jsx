const Restaurant7 = {
  restaurant: {
    id: "7",
    name: "Govinda – Narayan Peth, Prabhat Road",
    location: "Narayan Peth, Prabhat Road, Pune",
    rating: 4.3,
    deliveryTime: "30-40 mins",
    cuisines: ["North Indian", "Punjabi", "Chinese", "Indian Snacks"],
    costForTwo: 300
  },
  categories: [

    // 🫓 Parathas (Veg)
    {
      categoryId: "cat_parathas",
      categoryName: "Parathas",
      items: [
        {
          id: "gov_item_1",
          name: "Paneer Cheese Paratha",
          description: "Soft paratha stuffed with paneer & cheese",
          price: 160,
          isVeg: true,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1606954548516-8c20c1c86555?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "12 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "gov_item_2",
          name: "Aloo Methi Paratha",
          description: "Paratha with spiced potato & fenugreek",
          price: 135,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf4b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "10 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_3",
          name: "Mixed Veg Paratha",
          description: "Paratha filled with mixed veggies",
          price: 135,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1614691909158-86c2ff146b12?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "11 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_4",
          name: "Plain Paratha",
          description: "Classic soft plain paratha",
          price: 55,
          isVeg: true,
          rating: 5.0,
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "7 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍜 Noodles & Chinese
    {
      categoryId: "cat_noodles_chinese",
      categoryName: "Noodles & Chinese",
      items: [
        {
          id: "gov_item_5",
          name: "Veg Hakka Noodles",
          description: "Indo-Chinese style stir-fried noodles",
          price: 179,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_6",
          name: "Veg Schezwan Noodles",
          description: "Spicy veg schezwan noodles",
          price: 189,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_7",
          name: "Veg Singapore Noodles",
          description: "Slightly tangy & spicy Singapore noodles",
          price: 199,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1622199486540-3b0d3cbf3c8d?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_8",
          name: "Schezwan Paneer Noodles",
          description: "Paneer tossed in schezwan noodles",
          price: 209,
          isVeg: true,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1532634896-26909d0d85a7?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "16 mins",
          inStock: true,
          offer: 5
        }
      ]
    },

    // 🍛 Indian Main Course
    {
      categoryId: "cat_indian_main",
      categoryName: "Indian Main Course",
      items: [
        {
          id: "gov_item_9",
          name: "Dal Tadka",
          description: "Yellow lentils tempered with spices",
          price: 149,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_10",
          name: "Jeera Rice",
          description: "Flavored basmati rice with cumin",
          price: 119,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "gov_item_11",
          name: "Chole Bhature",
          description: "Spicy chickpeas with fluffy bhature",
          price: 219,
          isVeg: true,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "25 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "gov_item_12",
          name: "Paneer Butter Masala",
          description: "Creamy cottage cheese gravy",
          price: 249,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        }
      ]
    }

  ]
};

export default Restaurant7;
