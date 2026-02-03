import { useState } from "react";
import Typography from "../../UI/components/Typography";
import Button from "../../UI/components/Button";
import Image from "../../UI/components/Image";
import { IoLocation, IoPerson, IoMenu, IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Input from "../../UI/components/Input";
import { authUtils } from "../../../utils/authUtils.js";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = authUtils.getCurrentUser();
  const isAuthenticated = !!currentUser;

  const handleAuthClick = () => {
    navigate(isAuthenticated ? "/profile" : "/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 md:px-20 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="../../public/logo.jpg" alt="FoodWagon Logo" size="sm" shape="circle" />
        <Link to={"/"}>
          <Typography variant="h4" weight="bold" color="primary">
            OnTheGo!
          </Typography>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-1 items-center">
        <Typography variant="span" weight="bold">Deliver To:</Typography>
        <IoLocation />
        <Typography variant="span">Current Location : User Location</Typography>
      </nav>

      {/* Right Actions (Desktop) */}
      <div className="hidden md:flex h-14 gap-x-4">
        <Input
          type="text"
          placeholder="Search Food"
          rightIcon={<FaSearch size="1.5rem" color="orange" />}
        />
        <Button variant="outline" size="sm" onClick={handleAuthClick}>
          <IoPerson />
          <Typography variant="span" color="primary" weight="semibold">
            {isAuthenticated ? "Profile" : "Login"}
          </Typography>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
       <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">

          <Input
            type="text"
            placeholder="Search Food"
            rightIcon={<FaSearch size="1.5rem" color="orange" />}
          />
          <Button variant="outline" size="sm" onClick={handleAuthClick}>
            <IoPerson />
            <Typography variant="span" color="primary" weight="semibold">
              {isAuthenticated ? "Profile" : "Login"}
            </Typography>
          </Button>
          <div className="flex items-center gap-2">
            <IoLocation />
            <Typography variant="span">Deliver To: Current Location</Typography>
          </div>
        </div>
      )}
    </header>
  );
}
