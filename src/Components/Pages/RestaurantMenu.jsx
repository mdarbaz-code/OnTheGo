import { useEffect, useState } from "react";
import Typography from "../UI/components/Typography";
import MenuFilters from "../Core/components/RestaurantMenu/MenuFilters";
import ItemCategory from "../Core/components/RestaurantMenu/ItemCategory";
import { useParams } from "react-router-dom";
import RestaurantMenuData from "../../data/RestaurantMenus";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(RestaurantMenuData[id]);
  }, [id]);

  const [sortOption, setSortOption] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  if (!resInfo) return <div className="text-center mt-10">Restaurant not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">

        {/* HEADER */}
        <div className="mt-6 sm:mt-10 bg-[#ffb80e] shadow-lg rounded-2xl p-4 sm:p-6 space-y-2 border border-amber-100">
          <Typography variant="h1" size="2xl sm:3xl" weight="bold">
            {resInfo.restaurant.name}
          </Typography>

          <Typography size="xs sm:sm" className="text-gray-700">
            📍 {resInfo.restaurant.location}
          </Typography>

          <Typography size="xs sm:sm" className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full inline-block">
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

        {/* MENU */}
        <div className="mt-8 space-y-10 sm:space-y-14">
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
