const Restaurant6 = {
  restaurant: {
    id: "6",
    name: "Maharaja Family Restaurant",
    location: "Taj Function Hall, Mominpura, Kalaburagi",
    rating: 4.2,
    deliveryTime: "30–40 mins",
    cuisines: ["Chinese", "North Indian", "Biryani"],
    costForTwo: 300,
  },

  categories: [
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
          image:
            "https://images.ctfassets.net/3s5io6mnxfqz/2QfgYEh5BLQWthT7xtaDZy/183fe36789674eb44ebd64ecc111a7c1/AdobeStock_242313610.jpeg?w=1920",
          prepTime: "18 mins",
          inStock: true,
          offer: 5,
        },
        {
          id: "mf_item_2",
          name: "Veg Spring Roll",
          description: "Crispy vegetable rolls",
          price: 129,
          isVeg: true,
          rating: 4.0,
          image:
            "https://tse4.mm.bing.net/th/id/OIP.idupfWFzwDFW6nTIqwWXTAHaF8?rs=1&pid=ImgDetMain&o=7&rm=3",
          prepTime: "14 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "mf_item_3",
          name: "Chicken Pakora",
          description: "Spicy fried chicken bites",
          price: 199,
          isVeg: false,
          rating: 4.3,
          image:
            "https://www.cookinwithmima.com/wp-content/uploads/2023/12/chicken-pakora-600x800.jpg",
          prepTime: "16 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "mf_item_4",
          name: "Paneer Tikka",
          description: "Spiced grilled cottage cheese",
          price: 229,
          isVeg: true,
          rating: 4.2,
          image:
            "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80",
          prepTime: "20 mins",
          inStock: true,
          offer: 8,
        },
      ],
    },

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
          image:
            "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg",
          prepTime: "25 mins",
          inStock: true,
          offer: 10,
        },
        {
          id: "mf_item_6",
          name: "Veg Biryani",
          description: "Mixed vegetable biryani",
          price: 219,
          isVeg: true,
          rating: 4.0,
          image:
            "https://tse2.mm.bing.net/th/id/OIP.LadujoU81UAUhQjy9gElUwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
          prepTime: "22 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "mf_item_7",
          name: "Butter Chicken",
          description: "Creamy North Indian butter chicken",
          price: 289,
          isVeg: false,
          rating: 4.3,
          image:
            "https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Indian-butter-chicken-1.jpg",
          prepTime: "24 mins",
          inStock: true,
          offer: 15,
        },
        {
          id: "mf_item_8",
          name: "Paneer Butter Masala",
          description: "Rich creamy paneer gravy",
          price: 249,
          isVeg: true,
          rating: 4.1,
          image:
            "https://farm5.staticflickr.com/4244/34375209303_fe133a2921_o_d.png",
          prepTime: "23 mins",
          inStock: true,
          offer: 0,
        },
      ],
    },

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
          image:
            "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/VegetableFriedRice.webp",
          prepTime: "18 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "mf_item_10",
          name: "Chicken Chow Mein",
          description: "Stir-fried noodles with chicken",
          price: 189,
          isVeg: false,
          rating: 4.1,
          image:
            "https://tse4.mm.bing.net/th/id/OIP.DolCp7XhjOVNcVP1KXVQCAHaJ4?w=900&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3",
          prepTime: "18 mins",
          inStock: true,
          offer: 5,
        },
        {
          id: "mf_item_11",
          name: "Manchurian Veg",
          description: "Veg Manchurian with sauce",
          price: 179,
          isVeg: true,
          rating: 4.0,
          image:
            "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
          prepTime: "16 mins",
          inStock: true,
          offer: 0,
        },
        {
          id: "mf_item_12",
          name: "Chilli Chicken",
          description: "Spicy chilly chicken",
          price: 229,
          isVeg: false,
          rating: 4.2,
          image:
            "https://th.bing.com/th/id/OIP.zkU64CfbQSK9aSCISR1VqgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          prepTime: "20 mins",
          inStock: true,
          offer: 8,
        },
      ],
    },
  ],
};

export default Restaurant6;
