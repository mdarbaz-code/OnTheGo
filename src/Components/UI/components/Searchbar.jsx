import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar-form">
      <div className="flex items-center gap-2 px-4 py-4 bg-white rounded-md hover:bg-gray-100">
        <button type="submit" className="searchbar-btn">
          🔍︎
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for food items..."
          className="w-100 text-m font-medium normal-case outline-none bg-transparent"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="searchbar-clear"
          >
            ×
          </button>
        )}
      </div>
    </form>
  );
};

export default Searchbar;
