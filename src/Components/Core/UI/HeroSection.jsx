import Typography from "../../UI/components/Typography";
import Image from "../..//UI/components/Image";
import Input from "../../UI/components/Input";
import Button from "../../UI/components/Button";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";
import restaurants from "../../../data/restaurants";
import {Link} from 'react-router-dom'

export default function HeroSection() {
  return (
    <main className="font-sans bg-white">
      <section className="bg-[#ffb81f] px-6 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden ">
        {/* Left Content */}
        <div className="max-w-xl">
          <Typography
            variant="h1"
            weight="bold"
            className={"text-white"}
            size="4xl"
          >
            Are you starving?
          </Typography>
          <Typography variant="p" size="lg" color="muted">
            Within a few clicks, find meals that are accessible near you.
          </Typography>

          {/* Delivery / Pickup Toggle */}
          <div className="bg-white p-4 flex-col rounded  w-140 ">
            <div className="flex gap-4 ">
              <Button variant="warning" size="sm">
                Delivery
              </Button>
              <Button variant="outline" size="sm">
                Pickup
              </Button>
            </div>

            {/* Location Input */}
            <div className="mt-4 flex   ">
              <Input
                label="Enter your address"
                placeholder="Mohammadpur Bus Stand, Dhaka"
                width="full"
                variant="filled"
                size="md"
              />
              {/* CTA Button */}
              <Button
                variant="warning"
                size="lg"
                className="h-14 mt-6 text-nowrap "
              >
                Find Food
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <Image
          src="https://th.bing.com/th/id/OIP.GqJvEZzUrIbG-lncbOd9VwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Noodles Bowl"
          size="xl"
          shape="circle"
          className="shadow-lg absolute bottom-0.5 scale-[2.4] right-48 "
        />
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
    <section className="px-6 py-16 md:px-20 bg-linear-to-b from-[#FFF7E0] to-white shadow">
  {/* Heading stays fixed */}
  <Typography
    variant="h2"
    weight="bold"
    color="warning"
    size="3xl"
    className="text-center mb-12"
  >
    Popular Items
  </Typography>

  {/* Scrollable row */}
  <div className="flex gap-6 overflow-x-auto w-full pb-4">
    {[
      {
        name: "Cheese Burger",
        vendor: "Burger Arena",
        price: "$3.88",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.3QyzsiXG-jlOCfsWR4i-LQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        name: "Toffe's Cake",
        vendor: "Top Sticks",
        price: "$4.00",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.obvRzjM5buuA4OiTEp4C0wHaIS?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        name: "Fish Fry",
        vendor: "Fish World",
        price: "$1.99",
        image:
          "https://i1.wp.com/www.eazynazy.com/wp-content/uploads/2017/02/img_5673-1.jpg",
      },
      {
        name: "Crispy Sandwich",
        vendor: "Fastfood Dine",
        price: "$3.00",
        image:
          "https://bellyfull.net/wp-content/uploads/2023/02/Crispy-Chicken-Sandwich-blog-2.jpg",
      },
      {
        name: "Thai Soup",
        vendor: "Foody Man",
        price: "$2.79",
        image:
          "https://www.recipetineats.com/wp-content/uploads/2019/09/Tom-Yum-soup_2.jpg",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="min-w-55 bg-white p-4 rounded-xl shadow-2xl text-center border border-[#ffb81f]"
      >
        <Image
          src={item.image}
          alt={item.name}
          size="xl"
          shape="rounded"
        />
        <Typography variant="h5" weight="bold" color="muted">
          {item.name}
        </Typography>
        <Typography variant="small" color="muted">
          {item.vendor}
        </Typography>
        <Typography variant="p" color="primary">
          {item.price}
        </Typography>
        <Button variant="primary" size="sm" className="mt-2">
          Order Now
        </Button>
      </div>
    ))}
  </div>
</section>

      {/* Featured Restaurants */}
      <section className="px-6 py-16 md:px-20 bg-white">
        <Typography
          variant="h2"
          weight="bold"
          color="warning"
          size="3xl"
          className="text-center mb-12"
        >
          Featured Restaurants
        </Typography>
        <div className="  flex gap-6 overflow-x-auto w-full pb-4">
          {restaurants.map((res, i) => (
            <div key={i} className=" min-w-76 shadow-2xl p-4 rounded-xl text-center">
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
                className="text-[1.7rem]"
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
              <Typography variant="small" color="muted" >
                {res.status}
              </Typography>
              <br /> <br />
              <Link to={`/restaurants/${res.id}`} className=" px-4 py-2 rounded bg-red-400 text-white " >Explore</Link>
            </div>
          ))}
        </div>
        <Link to={"/restaurants"} >More Resturant</Link>
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
