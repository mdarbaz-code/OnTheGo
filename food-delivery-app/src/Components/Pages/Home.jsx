// Plugins or Packages

import { Flex } from "antd";

// re-usable components
import InputElement from "../UI/core/Input";
import Header from "../Core/Header";
import AllProducts from "./AllProducts";

// Components

const Home = ({ onSearch, searchQuery = "" }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <AllProducts searchQuery={searchQuery} />
    </>
  );
};

export default Home;
