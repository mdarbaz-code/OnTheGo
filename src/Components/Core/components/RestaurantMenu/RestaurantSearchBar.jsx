import Input from "../../../UI/components/Input";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <Input
      type="text"
      placeholder="Search dishes..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      leftIcon={<FiSearch />}
      variant="filled"
      size="md"
      width="w-6/12"
    />
  );
};

export default SearchBar;
