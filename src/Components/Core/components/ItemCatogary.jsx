import Typography from "../../UI/components/Typography";
import Button from "../../UI/components/Button";

const ItemCategory = ({ category, sortOption, activeFilter, searchText }) => {
  const filteredItems = category.items
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesChip =
        activeFilter === "All" ||
        (activeFilter === "Popular" && item.isPopular) ||
        (activeFilter === "Specials" && item.isSpecial) ||
        (activeFilter === "Vegetarian" && item.isVeg);

      return matchesSearch && matchesChip;
    })
    .sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      return 0;
    });

  if (filteredItems.length === 0) return null;

  return (
    <div className="mt-10">
      <Typography variant="h2" size="2xl" weight="bold" className="mx-40">
        {category.categoryName}
      </Typography>

      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 rounded-xl shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <Typography variant="h3" weight="semibold">
              {item.name}
            </Typography>

            <Typography weight="bold">₹{item.price}</Typography>

            <Typography size="xs" color="muted">
              {item.description}
            </Typography>

            <Button variant="primary" size="sm" className="mt-4 w-full">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategory;
