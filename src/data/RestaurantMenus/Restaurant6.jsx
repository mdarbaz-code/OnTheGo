const Restaurant6 = {
  restaurant: {
    id: "6",
    name: "Maharaja Family Restaurant",
    location: "Taj Function Hall, Mominpura, Kalaburagi",
    rating: 4.2,
    deliveryTime: "30–40 mins",
    cuisines: ["Chinese", "North Indian", "Biryani"],
    costForTwo: 300
  },

  categories: [

    // 🍗 Starters
    {
      categoryId: "cat_starters",
      categoryName: "Starters",
      items: [
        {
          id: "mf_item_1",
          name: "Chicken Lollipop",
          description: "Spicy fried chicken lollipop",
          price: 182,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "mf_item_2",
          name: "Veg Spring Roll",
          description: "Crispy vegetable rolls",
          price: 129,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "14 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "mf_item_3",
          name: "Chicken Pakora",
          description: "Spicy fried chicken bites",
          price: 199,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "16 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "mf_item_4",
          name: "Paneer Tikka",
          description: "Spiced grilled cottage cheese",
          price: 229,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: true,
          prepTime: "20 mins",
          inStock: true,
          offer: 8
        }
      ]
    },

    // 🍛 Main Course
    {
      categoryId: "cat_main_course",
      categoryName: "Main Course",
      items: [
        {
          id: "mf_item_5",
          name: "Chicken Biryani",
          description: "Spiced chicken biryani with saffron rice",
          price: 269,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "25 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "mf_item_6",
          name: "Veg Biryani",
          description: "Mixed vegetable biryani",
          price: 219,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "mf_item_7",
          name: "Butter Chicken",
          description: "Creamy North Indian butter chicken",
          price: 289,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "24 mins",
          inStock: true,
          offer: 15
        },
        {
          id: "mf_item_8",
          name: "Paneer Butter Masala",
          description: "Rich creamy paneer gravy",
          price: 249,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "23 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍜 Chinese / Indo-Chinese
    {
      categoryId: "cat_chinese",
      categoryName: "Chinese & Noodles",
      items: [
        {
          id: "mf_item_9",
          name: "Veg Fried Rice",
          description: "Vegetable fried rice",
          price: 169,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1512058564366-c9e7c0fa294c?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "mf_item_10",
          name: "Chicken Chow Mein",
          description: "Stir-fried noodles with chicken",
          price: 189,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1622199486540-3b0d3cbf3c8d?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "mf_item_11",
          name: "Manchurian Veg",
          description: "Veg Manchurian with sauce",
          price: 179,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "16 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "mf_item_12",
          name: "Chilli Chicken",
          description: "Spicy chilly chicken",
          price: 229,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "20 mins",
          inStock: true,
          offer: 8
        }
      ]
    }

  ]
};

export default Restaurant6;
