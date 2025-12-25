import Navbar from "../UI/components/Navbar";

const Header = ({ onSearch }) => {
  return (
    <>
      <Navbar onSearch={onSearch} />
    </>
  );
};
export default Header;
