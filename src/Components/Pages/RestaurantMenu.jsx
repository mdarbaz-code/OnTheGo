import { useEffect, useState } from "react";
import Typography from "../UI/components/Typography";
import MenuFilters from "../Core/components/RestaurantMenu/MenuFilters";
import ItemCategory from "../Core/components/RestaurantMenu/ItemCategory";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // State variables for restaurant information
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();
  console.log("Restaurant ID:", id);

  // State variables for filters
  const [sortOption, setSortOption] = useState("");
  // state for active filter tab
  const [activeFilter, setActiveFilter] = useState("All");
  // state for search text
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/mock/RestaurantMenu.json");
    const data = await response.json();
    setResInfo(data);
  };

  if (!resInfo)
    return (
      <Typography className="text-center mt-20" weight="semibold">
        Loading menu...
      </Typography>
    );

  return (
    <div className="mt-10">
      {/* Restaurant Header */}
      <div className="w-10/12 mx-auto bg-white shadow-xl rounded-2xl p-6">
        <Typography variant="h1" size="3xl" weight="bold" color="primary">
          {resInfo.restaurant.name}
        </Typography>

        <Typography size="sm" color="muted">
          📍 {resInfo.restaurant.location}
        </Typography>

        <Typography size="sm" color="secondary">
          {resInfo.restaurant.cuisines.join(", ")}
        </Typography>
      </div>

      {/* Filters */}
      <MenuFilters
        sortOption={sortOption}
        setSortOption={setSortOption}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* Categories */}
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
  );
};

export default RestaurantMenu;
