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
    <div className="mt-6 sm:mt-8 flex flex-col gap-5">

      <div className="flex gap-2 flex-wrap justify-center">
        {["All", "Popular", "Specials", "Vegetarian"].map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "primary" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="w-full sm:w-6/12">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Typography variant="small" weight="semibold">Sort By:</Typography>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Relevance</option>
            <option value="lowToHigh">Price: Low → High</option>
            <option value="highToLow">Price: High → Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;
