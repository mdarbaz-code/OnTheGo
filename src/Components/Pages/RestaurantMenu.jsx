import { useEffect, useState } from "react";
import Typography from "../UI/components/Typography";
import MenuFilters from "../Core/components/RestaurantMenu/MenuFilters";
import ItemCategory from "../Core/components/RestaurantMenu/ItemCategory";
import { useParams } from "react-router-dom";
import RestaurantMenuData from "../../data/RestaurantMenus/index.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log("Restaurant ID:", id);

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(RestaurantMenuData[id]);
  }, [id]); // 🔥 runs whenever URL id changes

  // State variables for filters
  const [sortOption, setSortOption] = useState("");
  // state for active filter tab
  const [activeFilter, setActiveFilter] = useState("All");
  // state for search text
  const [searchText, setSearchText] = useState("");

  if (!resInfo) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* PAGE CONTAINER */}
      <div className="max-w-6xl mx-auto px-4">
        {/* RESTAURANT HEADER */}
        <div className="mt-10 bg-[#ffb80e] shadow-lg rounded-2xl p-6 space-y-3 border border-amber-100 hover:shadow-xl transition">
          {/* Restaurant Name */}
          <Typography
            variant="h1"
            size="3xl"
            weight="bold"
            className="text-gray-800"
          >
            {resInfo.restaurant.name}
          </Typography>

          {/* Location */}
          <Typography
            size="sm"
            className="text-gray-500 flex items-center gap-1"
          >
            <span className="text-[#ffb80e]">📍</span>
            {resInfo.restaurant.location}
          </Typography>

          {/* Cuisines */}
          <Typography
            size="sm"
            className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full inline-block"
          >
            {resInfo.restaurant.cuisines.join(" • ")}
          </Typography>
        </div>

        {/* FILTERS */}
        <MenuFilters
          sortOption={sortOption}
          setSortOption={setSortOption}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        {/* MENU CATEGORIES */}
        <div className="mt-8 space-y-16">
          {resInfo.categories.map((category) => (
            <ItemCategory
              key={category.categoryId}
              category={category}
              sortOption={sortOption}
              activeFilter={activeFilter}
              searchText={searchText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
