import { useState, useEffect } from "react";
import Typography from "../../UI/components/Typography";
import Button from "../../UI/components/Button";
import Image from "../../UI/components/Image";
import { IoLocation, IoPerson, IoMenu, IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Input from "../../UI/components/Input";
import { authUtils } from "../../../utils/authUtils.js";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const navigate = useNavigate();
  const currentUser = authUtils.getCurrentUser();
  const isAuthenticated = !!currentUser;

  const handleAuthClick = () => {
    navigate(isAuthenticated ? "/profile" : "/login");
  };

  useEffect(() => {
    // const cachedLocation = localStorage.getItem("userLocation");
    // if (cachedLocation) {
    //   setLocation(cachedLocation);
    //   return;
    // }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=12.921203&lon=77.61019&format=json`);
            const data = await res.json();
            console.log(data);

            // ✅ Correct way to access display_name
            const loc = data.display_name || `${latitude}, ${longitude}`;
            setLocation(loc);
            localStorage.setItem("userLocation", loc);
          } catch (error) {
            console.log(error);
            const fallback = `${latitude}, ${longitude}`;
            setLocation(fallback);
            localStorage.setItem("userLocation", fallback);
          }
        },
        () => {
          setLocation("Location access denied");
        },
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  // Helper for truncation
  const truncateText = (text, limit) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <header className="bg-white shadow-md px-4 py-3 md:px-20 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="../../public/logo.jpg"
          alt="FoodWagon Logo"
          size="sm"
          shape="circle"
        />
        <Link to={"/"}>
          <Typography
            variant="h5"
            weight="bold"
            color="primary"
            className="md:text-2xl"
          >
            OnTheGo!
          </Typography>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-2 items-center">
        <Typography variant="span" weight="bold">
          Deliver To:
        </Typography>
        <IoLocation />
        <Typography variant="span">{truncateText(location, 25)}</Typography>
      </nav>

      {/* Right Actions (Desktop) */}
      <div className="hidden md:flex h-14 gap-x-4 items-baseline justify-center">
        <Input
          type="text"
          placeholder="Search Food"
          rightIcon={<FaSearch size="1.5rem" color="orange" />}
        />
        <Button
          className="border border-gray-300 flex items-center gap-2"
          variant="outline"
          size="sm"
          onClick={handleAuthClick}
        >
          {isAuthenticated ? <IoPerson className="scale-[1.4]" /> : null}
          <Typography variant="span" color="primary" weight="semibold">
            {isAuthenticated ? "Profile" : "Login"}
          </Typography>
        </Button>
        <Button
          className="border border-gray-300 flex items-center gap-2"
          variant="outline"
          size="sm"
        >
          <Link to="/cart" className="flex items-center gap-2">
            {isAuthenticated ? <IoCart className="scale-[1.4]" /> : null}
            <Typography variant="span" color="primary" weight="semibold">
              Cart
            </Typography>
          </Link>
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
          <Button variant="outline" size="sm">
            <Link to="/cart" className="flex items-center gap-2">
              <IoCart />
              <Typography variant="span" color="primary" weight="semibold">
                Cart
              </Typography>
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <IoLocation />
            <Typography variant="span">
              Deliver To: {truncateText(location, 15)}
            </Typography>
          </div>
        </div>
      )}
    </header>
  );
}
