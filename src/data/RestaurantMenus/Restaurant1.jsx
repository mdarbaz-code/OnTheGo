const Restaurant1= {
  restaurant: {
    id: "red_kababish_957598",
    name: "Red Kababish Arabian Mughlai Chinese",
    location: "Mominpura, Kalaburagi",
    rating: 4.0,
    deliveryTime: "30-40 mins",
    cuisines: ["Mughlai", "Chinese", "Arabian", "North Indian"],
    costForTwo: 450
  },

  categories: [

    // 🍛 Biryani / Rice
    {
      categoryId: "cat_biryani",
      categoryName: "Biryani & Rice",
      items: [
        {
          id: "rb_item_1",
          name: "Mutton Biryani",
          description: "Spiced mutton with aromatic rice",
          price: 299,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1606755962773-d324e2d53f7b?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "25 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "rb_item_2",
          name: "Chicken Biryani",
          description: "Classic chicken biryani",
          price: 259,
          isVeg: false,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1559628233-7f9a4318b377?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "25 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "rb_item_3",
          name: "Veg Biryani",
          description: "Mixed vegetable biryani",
          price: 199,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "22 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rb_item_4",
          name: "Fried Rice",
          description: "Chinese style fried rice",
          price: 179,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1579999079635-e6153702ee8d?w=400&auto=format&fit=crop&q=60",
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
      categoryId: "cat_kebabs",
      categoryName: "Starters & Kebabs",
      items: [
        {
          id: "rb_item_5",
          name: "Chicken Lollipop",
          description: "Spicy fried chicken lollipop",
          price: 229,
          isVeg: false,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 5
        },
        {
          id: "rb_item_6",
          name: "Seekh Kebab",
          description: "Mughlai style grilled kebab",
          price: 249,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1589987603704-e8699b1ddb2c?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "20 mins",
          inStock: true,
          offer: 10
        },
        {
          id: "rb_item_7",
          name: "Paneer Tikka",
          description: "Marinated cottage cheese kebab",
          price: 189,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "18 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rb_item_8",
          name: "Falafel",
          description: "Crispy vegetarian balls",
          price: 169,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        }
      ]
    },

    // 🍜 Chinese & Indo-Chinese
    {
      categoryId: "cat_chinese",
      categoryName: "Chinese & Noodles",
      items: [
        {
          id: "rb_item_9",
          name: "Chicken Noodles",
          description: "Stir fried noodles with chicken",
          price: 199,
          isVeg: false,
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1622199486540-3b0d3cbf3c8d?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: false,
          prepTime: "16 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rb_item_10",
          name: "Manchow Soup",
          description: "Spicy veg soup",
          price: 119,
          isVeg: true,
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1512058564366-c9e7c0fa294c?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "12 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rb_item_11",
          name: "Veg Fried Rice",
          description: "Vegetable fried rice",
          price: 159,
          isVeg: true,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop&q=60",
          isPopular: false,
          isSpecial: false,
          prepTime: "15 mins",
          inStock: true,
          offer: 0
        },
        {
          id: "rb_item_12",
          name: "Chilli Chicken",
          description: "Spicy Indo-Chinese chicken",
          price: 229,
          isVeg: false,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60",
          isPopular: true,
          isSpecial: true,
          prepTime: "18 mins",
          inStock: true,
          offer: 8
        }
      ]
    }
  ]
};

export default Restaurant1;
