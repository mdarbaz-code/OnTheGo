import { useState, useEffect } from "react";
import Typography from "../../UI/components/Typography";
import Button from "../../UI/components/Button";
import Image from "../../UI/components/Image";
import { IoLocation, IoPerson, IoMenu, IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Input from "../../UI/components/Input";
import { authUtils, isAuthenticated } from "../../../utils/authUtils.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getSearchData } from "../../../utils/getSearchData"; // ✅ search helper
import { useCart } from "../../../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentUser = authUtils.getCurrentUser();
  const isUserAuthenticated = !!currentUser;
  const { getCartItemCount } = useCart();
  
  // Check if user is on login/signup page
  const isOnAuthPage = pathname === '/login' || pathname === '/signup';

  const searchData = getSearchData();
  const filteredResults = searchData.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAuthClick = () => {
    navigate(isUserAuthenticated ? "/profile" : "/login");
  };

  useEffect(() => {
    const cachedLocation = localStorage.getItem("userLocation");
    if (cachedLocation) {
      setLocation(cachedLocation);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`,
            );
            const data = await res.json();
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
      <nav
      title={location}
        className="hidden md:flex gap-2 items-baseline min-w-[40%] text-nowrap overflow-hidden px-4"
      >
        <Typography variant="span" weight="bold" className={""}>
          Deliver To:
        </Typography>
        <IoLocation />
        <Typography  variant="span">{truncateText(location, 50)}</Typography>
      </nav>

      {/* Right Actions (Desktop) */}
      <div className="hidden md:flex h-14 gap-x-4 items-baseline justify-center relative min-w-[30%]">
        {/* ✅ Search Input */}
        <Input
          type="text"
          placeholder="Search Food ex:Dal Tadka"
          value={searchTerm}
          onChange={(e) => {
            if (!isOnAuthPage) {
              setSearchTerm(e.target.value);
            }
          }}
          disabled={isOnAuthPage}
          rightIcon={
            searchTerm.split("").length > 0 && !isOnAuthPage ? (
              <IoClose onClick={() => setSearchTerm("")} />
            ) : (
              <FaSearch size="1.5rem" color="orange" />
            )
          }
        />

        {/* ✅ Search Results Dropdown - Hidden on Auth Pages */}
        {searchTerm && !isOnAuthPage && (
          <div className="absolute top-full left-0 w-64 bg-white shadow-md mt-2 rounded-md z-50 max-h-60 overflow-y-auto">
            {filteredResults.length > 0 ? (
              filteredResults.map((entry) => (
                <div
                  key={entry.name}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    entry.type === "restaurant" || entry.type === "food"
                      ? navigate(`/restaurants/${entry.restoId}`)
                      : console.log(entry.restoId)
                  }
                >
                  {" "}
                  <Typography variant="span" weight="semibold">
                    {" "}
                    {entry.name}{" "}
                  </Typography>{" "}
                  <Typography variant="span" className="text-sm text-gray-500">
                    {" "}
                    {entry.type == "restaurant" && entry.type == "food"
                      ? entry.restaurantName
                      : `Food • ${entry.restaurantName}`}{" "}
                  </Typography>{" "}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No matches found</div>
            )}
          </div>
        )}

        {/* Profile Button */}
        <Button
          className="border border-gray-300 flex items-center gap-2"
          variant="outline"
          size="sm"
          onClick={handleAuthClick}
        >
          {isUserAuthenticated ? <IoPerson className="scale-[1.4]" /> : null}
          <Typography variant="span" color="primary" weight="semibold">
            {isUserAuthenticated ? "Profile" : "Login"}
          </Typography>
        </Button>

        {/* Cart Button */}
        {isAuthenticated && (
           <Link to={"/cart"} >
          <Button variant="outline" size="sm" className="border border-gray-300 flex items-center gap-2" >
            <IoCart className={"scale-[1.4]"} />
            <Typography variant="span" color="primary" weight="semibold">
              Cart
            </Typography>
          </Button>
           </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose  className="text-red-300" /> : <IoMenu className="text-red-300" />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">
          {/* ✅ Mobile Search */}
          <Input
            type="text"
            placeholder="Search Restaurants or Food"
            value={searchTerm}
            onChange={(e) => {
              if (!isOnAuthPage) {
                setSearchTerm(e.target.value);
              }
            }}
            disabled={isOnAuthPage}
            rightIcon={
              searchTerm.split("").length > 0 && !isOnAuthPage ? (
                <IoClose onClick={() => setSearchTerm("")} />
              ) : (
                <FaSearch size="1.5rem" color="orange" />
              )
            }
          />

          {searchTerm && !isOnAuthPage && (
            <div className="bg-white shadow-md rounded-md">
              {filteredResults.length > 0 ? (
                filteredResults.map((entry) => (
                  <div
                    key={entry.name}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      if (
                        entry.type === "restaurant" ||
                        entry.type === "food"
                      ) {
                        navigate(`/restaurants/${entry.restoId}`);
                        setMenuOpen(false);
                      } else {
                        console.log(entry.restoId);
                      }
                    }}
                  >
                    {" "}
                    <Typography variant="span" weight="semibold">
                      {" "}
                      {entry.name}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="span"
                      className="text-sm text-gray-500"
                    >
                      {" "}
                      {entry.type == "restaurant" && entry.type == "food"
                        ? entry.restaurantName
                        : `Food • ${entry.restaurantName}`}{" "}
                    </Typography>{" "}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No matches found</div>
              )}
            </div>
          )}

          {/* Profile & Cart */}
          <Button variant="outline" size="sm" onClick={handleAuthClick}>
            <IoPerson />
            <Typography variant="span" color="primary" weight="semibold">
              {isUserAuthenticated ? "Profile" : "Login"}
            </Typography>
          </Button>
          {isAuthenticated && (
            <Link to={"/cart"} >
            <Button variant="outline" size="sm">
              <IoCart />
              <Typography variant="span" color="primary" weight="semibold">
                Cart
              </Typography>
            </Button>
            </Link>
          )}

          {/* Location */}
          <div className="flex items-center gap-2">
            <IoLocation />
            <Typography variant="span" className={"min-w-full overflow-hidden text-wrap"}>
              Deliver To: {truncateText(location, 60)}
            </Typography>
          </div>
        </div>
      )}
    </header>
  );
}
