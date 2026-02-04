const Restaurant5 = {
  restaurant: {
    id: "5",
    name: "Zafran – Fine Dine Multicuisine Restaurant",
    location: "Asian Fun World, Tawargera Cross, Mahagaon, Gulbarga",
    rating: 4.3,
    deliveryTime: "30-45 mins",
    cuisines: ["North Indian", "Chinese", "Mughlai", "Biryani", "Continental"],
    costForTwo: 500
  },
  categories: [

    // 🍛 Biryani & Rice
    {
      categoryId: "cat_biryani_rice",
      categoryName: "Biryani & Rice",
      items: [
        {
          id: "zf_item_1",
          name: "Chicken Dum Biryani",
          description: "Aromatic chicken biryani with Indian spices",
          price: 279,
          isVeg: false,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "25 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "zf_item_2",
          name: "Mutton Biryani",
          description: "Rich mutton biryani with basmati rice",
          price: 319,
          isVeg: false,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "30 mins",
          inStock: true,
          offer: 15
        },
        {
          id: "zf_item_3",
          name: "Veg Biryani",
          description: "Fragrant vegetable biryani",
          price: 219,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "zf_item_4",
          name: "Egg Fried Rice",
          description: "Indian-Chinese style egg fried rice",
          price: 179,
          isVeg: false,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍗 Starters & Kebabs
    {
      categoryId: "cat_starters_kebabs",
      categoryName: "Starters & Kebabs",
      items: [
        {
          id: "zf_item_5",
          name: "Chicken Lollipop",
          description: "Spicy fried chicken lollipops",
          price: 239,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "zf_item_6",
          name: "Paneer 65",
          description: "Crispy paneer starter",
          price: 189,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "zf_item_7",
          name: "Chicken Manchurian",
          description: "Indo-Chinese chicken in sauce",
          price: 259,
          isVeg: false,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "zf_item_8",
          name: "Gobi Manchurian",
          description: "Crispy cauliflower in Indo-Chinese sauce",
          price: 179,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1512058564366-c9e7c0fa294c?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍛 Main Course
    {
      categoryId: "cat_main_course",
      categoryName: "Main Course",
      items: [
        {
          id: "zf_item_9",
          name: "Butter Chicken",
          description: "Creamy tomato gravy with chicken",
          price: 289,
          isVeg: false,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "24 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "zf_item_10",
          name: "Paneer Butter Masala",
          description: "Creamy cottage cheese in gravy",
          price: 259,
          isVeg: true,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "zf_item_11",
          name: "Mutton Korma",
          description: "Rich mutton curry",
          price: 319,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "28 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "zf_item_12",
          name: "Veg Kadai",
          description: "Mixed veg in spicy gravy",
          price: 219,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "20 mins",
          inStock: true,
          offer: 0
        }
      ]
    }
  ]
};

export default Restaurant5;
