import Typography from "../../UI/components/Typography";
import Image from "../..//UI/components/Image";
import Input from "../../UI/components/Input";
import Button from "../../UI/components/Button";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoClose, IoLocation } from "react-icons/io5";
import { BiHappyBeaming } from "react-icons/bi";
import restaurants from "../../../data/restaurants";
import { Link } from "react-router-dom";
import RestaurantMenuData from "../../../data/RestaurantMenus/index";
import { useState } from "react";

const popularItems = Object.values(RestaurantMenuData)
  .flatMap((res) =>
    res.categories.flatMap((cat) => cat.items.filter((item) => item.isPopular)),
  )
  // ✅ remove duplicates by id
  .filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id),
  );

// Find restaurants by address (case-insensitive, no duplicates)
export function findRestaurantsByAddress(address) {
  if (!address) return [];

  return (
    Object.values(RestaurantMenuData)
      // filter by address match
      .filter((res) =>
        res.restaurant.location.toLowerCase().includes(address.toLowerCase()),
      )
      // remove duplicates by restaurant id
      .filter(
        (res, index, self) =>
          index ===
          self.findIndex((r) => r.restaurant.id === res.restaurant.id),
      )
  );
}

export default function HeroSection() {
  const [resto, setResto] = useState({ address: "", id: 0 });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const matchingRestaurants = findRestaurantsByAddress(resto.address);
  return (
    <main className="font-sans bg-white w-full">
      {" "}
      <section className="bg-[#ffb81f] w-full min-h-[80dvh] py-16 flex flex-col sm:flex-row justify-start align-top overflow-hidden">
        {" "}
        {/* Left Content */}{" "}
        <div className="mt-[8dvh] sm:m-auto w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] min-w-[18rem] px-6">
          {" "}
          <Typography
            variant="h1"
            weight="bold"
            className="text-white text-2xl sm:text-3xl md:text-4xl"
          >
            {" "}
            Are you starving?{" "}
          </Typography>{" "}
          <Typography variant="p" size="lg" color="muted">
            {" "}
            Within a few clicks, find meals that are accessible near you.{" "}
          </Typography>{" "}
          {/* Search Box */}{" "}
          <div className="bg-white p-4 rounded shadow-md w-full mt-6 relative">
            {" "}
            <div className="flex flex-col sm:flex-row gap-4">
              {" "}
              <Input
                label="Enter your address"
                placeholder="Mohammadpur Bus Stand, Dhaka"
                width="full"
                variant="filled"
                size="md"
                value={resto.address}
                onChange={(e) =>
                  setResto({ ...resto, address: e.target.value })
                }
                rightIcon={
                  resto.address && (
                    <IoClose
                      onClick={() => {
                        setResto({ address: "", id: 0 });
                        setSelectedRestaurant(null);
                      }}
                      className="cursor-pointer text-gray-500 hover:text-red-500"
                    />
                  )
                }
              />{" "}
              <Link to={`/restaurants/${resto.id}`}>
                {" "}
                <Button
                  variant="warning"
                  size="lg"
                  className="h-12 sm:h-14 px-6 text-nowrap sm:mt-4"
                >
                  {" "}
                  Find Food{" "}
                </Button>{" "}
              </Link>{" "}
            </div>{" "}
            {/* Dropdown Results */}{" "}
            {resto.address && !selectedRestaurant && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 rounded-md z-50 max-h-60 overflow-y-auto border border-gray-200 z-50">
                {" "}
                {matchingRestaurants.length > 0 ? (
                  matchingRestaurants.map((res) => (
                    <div
                      key={res.restaurant.id}
                      className="px-4 py-2 cursor-pointer hover:bg-orange-50 transition-colors"
                      onClick={() => {
                        setResto({
                          address: res.restaurant.name,
                          id: res.restaurant.id,
                        });
                        setSelectedRestaurant(res);
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        weight="semibold"
                        color="primary"
                      >
                        {" "}
                        {res.restaurant.name}{" "}
                      </Typography>{" "}
                      <Typography
                        variant="span"
                        className="block text-sm text-gray-500"
                      >
                        {" "}
                        <IoLocation className="inline text-orange-400 mr-1" />{" "}
                        {res.restaurant.location}{" "}
                      </Typography>{" "}
                      <Typography
                        variant="span"
                        className="block text-xs text-green-600"
                      >
                        {" "}
                        ⭐ {res.restaurant.rating}{" "}
                      </Typography>{" "}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500 text-center">
                    {" "}
                    No restaurants found{" "}
                  </div>
                )}{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>
        {/* Right Image */}
        <div className=" rounded-full h-[25%] w-[25%] hidden lg:block p-[10%] pr-[30%]">
          {" "}
          <Image
            src="https://th.bing.com/th/id/OIP.GqJvEZzUrIbG-lncbOd9VwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Noodles Bowl"
            size="xl"
            shape="circle"
            className="shadow-lg scale-[2.4]"
          />{" "}
        </div>
      </section>
      {/* How It Works */}
      <section className="px-6 py-16 md:px-20 bg-white">
        <Typography
          variant="h2"
          weight="bold"
          color="warning"
          size="3xl"
          className="text-center mb-12"
        >
          How does it work
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            {
              title: "Select location",
              desc: "Choose the location where your food will be delivered.",
              icon: <CiLocationOn className="scale-[3.7]" color="#ffb18f" />,
            },
            {
              title: "Choose order",
              desc: "Check over hundreds of menus to pick your favorite food.",
              icon: (
                <MdOutlineFastfood className="scale-[3.7]" color="#ffb18f" />
              ),
            },
            {
              title: "Pay advanced",
              desc: "Select several methods of payment.",
              icon: <FaWallet className="scale-[3.7]" color="#ffb18f" />,
            },
            {
              title: "Enjoy meals",
              desc: "Food is made and delivered directly to your home.",
              icon: <BiHappyBeaming className="scale-[3.7]" color="#ffb18f" />,
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <>{step?.icon}</>
              <Typography
                variant="h5"
                weight="bold"
                color="danger"
                className="mt-4"
              >
                {step.title}
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                {step.desc}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      {/* Popular Items */}
      {/* Popular Items */}
      <section className="px-6 py-16 md:px-20 bg-linear-to-b from-[#FFF7E0] to-white shadow">
        <Typography
          variant="h2"
          weight="bold"
          color="warning"
          size="3xl"
          className="text-center mb-12"
        >
          Popular Items
        </Typography>

        <div className="flex gap-6 overflow-x-auto w-full pb-4">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="min-w-55 bg-white p-4 rounded-xl shadow-2xl text-center border border-[#ffb81f]"
            >
              <Image
                src={item.image}
                alt={item.name}
                size="xl"
                shape="rounded"
              />
              <Typography
                className={"line-clamp-1"}
                variant="h5"
                weight="bold"
                color="muted"
              >
                {item.name}
              </Typography>
              <Typography variant="small" color="muted">
                {/* Show restaurant name */}
                {
                  Object.values(RestaurantMenuData).find((res) =>
                    res.categories.some((cat) =>
                      cat.items.some((i) => i.id === item.id),
                    ),
                  )?.restaurant.name
                }
              </Typography>
              <Typography variant="p" color="primary">
                ₹{item.price}
              </Typography>
              <Button variant="primary" size="sm" className="mt-2">
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Restaurants */}
      <section className="px-6 py-16 md:px-20 bg-white flex flex-col justify-center items-center ">
        <Typography
          variant="h2"
          weight="bold"
          color="warning"
          size="3xl"
          className="text-center mb-12"
        >
          Featured Restaurants
        </Typography>
        <div className="  flex gap-6 overflow-x-auto w-full pb-4 mb-8 ">
          {restaurants.map((res, i) => (
            <div
              key={i}
              className=" min-w-76 shadow-2xl p-4 rounded-xl text-center"
            >
              <Image
                src={res.image}
                alt={res.name}
                size="xxl"
                shape="rounded"
                fallback="Resto Image"
                className="aspect-square"
              />
              <Typography
                variant="h6"
                className="text-[1.7rem] line-clamp-1"
                weight="bold"
                color="primary"
              >
                {res.name}
              </Typography>
              <Typography variant="small" color="success">
                ⭐ {res.rating}
              </Typography>
              <Typography variant="p" color="danger">
                {res.discount} Off
              </Typography>
              <Typography variant="small" color="muted">
                {res.status}
              </Typography>
              <br /> <br />
              <Link to={`/restaurants/${res.id}`} className="">
                <Button variant="warning">Explore</Button>
              </Link>
            </div>
          ))}
        </div>
        <Link to={"/restaurants"} className="">
          <Button>More Resturant</Button>
        </Link>
      </section>
      {/* Install App */}
      <section className="px-6 py-16 md:px-20 bg-[#FFF7E0] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <Typography variant="h2" weight="bold" color="warning" size="3xl">
            Install the app
          </Typography>
          <Typography variant="p" size="lg" color="muted" className="mt-4">
            It’s never been easier to order food. Look for the finest discounts
            and you’ll be lost in a world of delectable food.
          </Typography>
          <div className="flex gap-4 mt-6">
            <Button variant="primary" size="md">
              Get it on Google Play
            </Button>
            <Button variant="secondary" size="md">
              Download on App Store
            </Button>
          </div>
        </div>
        <Image
          src="../../public/logo.jpg"
          alt="App Preview"
          size="xl"
          shape="rounded"
        />
      </section>
    </main>
  );
}
