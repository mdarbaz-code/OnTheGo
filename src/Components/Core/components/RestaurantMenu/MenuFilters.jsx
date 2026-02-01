import Button from "../../../UI/components/Button";
import Typography from "../../../UI/components/Typography";
import SearchBar from "./RestaurantSearchBar";

const MenuFilters = ({
  sortOption,
  setSortOption,
  activeFilter,
  setActiveFilter,
  searchText,
  setSearchText,
}) => {
  return (
    <div className="mt-8 flex flex-col items-center gap-6">
      {/* Tabs */}
      <div className="flex gap-3 flex-wrap justify-center">
        {["All", "Popular", "Specials", "Vegetarian"].map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "primary" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "Popular" && "⭐ "}
            {filter === "Specials" && "⚡ "}
            {filter === "Vegetarian" && "🥦 "}
            {filter}
          </Button>
        ))}
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-8/12 mx-auto">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        <div className="flex items-center gap-3">
          <Typography variant="small" weight="semibold">
            Sort By:
          </Typography>

          <div className="border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-yellow-400">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full outline-none bg-transparent"
            >
              <option value="">Relevance</option>
              <option value="lowToHigh">Price: Low → High</option>
              <option value="highToLow">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;
