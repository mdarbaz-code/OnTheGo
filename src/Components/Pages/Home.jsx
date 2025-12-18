
// Plugins or Packages

import { Flex } from "antd";

// re-usable components
import InputElement from "../UI/core/Input";

// Components


const Home = () => {
  return (
    <>
        <Flex vertical gap="middle">
            <InputElement size="large" placeholder="large size" />
            <InputElement placeholder="default size"/>
            <InputElement size="small" placeholder="small size" />
        </Flex>
    </>
  );
}

export default Home;
