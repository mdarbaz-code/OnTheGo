import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = (query) => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full bg-gray-300 px-6 py-3">
      <div className="flex items-center w-full">
        {/* LEFT: Logo */}
        <Link to="/">
          <img
            className="w-20 mix-blend-multiply cursor-pointer hover:opacity-80"
            src="logo.jpg"
            alt="logo"
          />
        </Link>

        {/* CENTER: Search */}
        <div className="flex justify-center flex-1 px-8">
          <Searchbar onSearch={handleSearch} className="w-full" />
        </div>

        {/* RIGHT: Menu */}
        <ul className="flex items-center uppercase text-lg gap-6">
          {/* Location Bar */}
          <li className="flex items-center gap-2 px-4 py-4 bg-white rounded-md hover:bg-gray-100">
            <img
              className="w-6"
              src="https://omgsymbol.com/download/location/03/high-res/logo-transparent.png"
              alt=""
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-50 text-sm font-medium normal-case outline-none bg-transparent"
            />
          </li>

          {/* Cart */}
          <li className="px-4 py-2 hover:scale-95 cursor-pointer">
            <Link to="/cart">
              <img className="w-8" src="shopping-cart.svg" alt="cart" />
            </Link>
          </li>

          {/* Profile */}
          <li className="px-4 py-4 hover:scale-95 cursor-pointer">
            <Link to="/profile">
              <img className="w-8" src="user-profile.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
