import React, { useState, useRef } from "react";
import "../../../assets/styles/CategorySearch.css";

const CategorySearch = ({ onCategorySelect, selectedCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 1, name: "Pizza", img: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg" },
    { id: 2, name: "Burger", img: "https://static.vecteezy.com/system/resources/thumbnails/023/809/386/small_2x/burger-with-beef-tomato-and-herbs-ai-generative-free-photo.jpg" },
    { id: 3, name: "Starter", img: "https://png.pngtree.com/thumb_back/fw800/background/20240920/pngtree-asian-street-food-yakisoba-chow-mein-soba-noodles-singapore-recipes-concept-image_16231565.jpg" },
    { id: 4, name: "Sandwich", img: "https://img.freepik.com/premium-photo/generous-sub-sandwich-loaded-with-veggies-meats_419341-141848.jpg" },
    { id: 5, name: "Curry", img: "https://img.freepik.com/premium-photo/chow-mein-black-plate-top-view_636537-35828.jpg" },
    { id: 6, name: "Dessert", img: "https://tse3.mm.bing.net/th/id/OIP.jj1f5gU0n674RO-kHdMSTwHaEu?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 7, name: "Rice", img: "https://www.cookwithkushi.com/wp-content/uploads/2015/04/best_vegetable_biryani_recipe.jpg" }
  ];

  const handlePrevious = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const handleNext = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
      setCurrentIndex(Math.min(categories.length - 1, currentIndex + 1));
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  const handleViewAll = () => {
    if (onCategorySelect) {
      onCategorySelect("");
    }
  };

  return (
    <section className="category-search">
      <div className="category-header">
        <h2>Search by Category</h2>
        <div className="category-actions">
          <button 
            onClick={handleViewAll}
            className={`view-all ${!selectedCategory ? 'active' : ''}`}
          >
            View All
          </button>
          <button className="arrow-btn prev-btn" onClick={handlePrevious}>
            &#8249;
          </button>
          <button className="arrow-btn next-btn" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>

      <div className="categories-container" ref={scrollContainerRef}>
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-image-wrapper">
              <img src={category.img} alt={category.name} />
            </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySearch;
