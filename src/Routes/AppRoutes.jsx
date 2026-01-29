import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import BrowseRestaurants from "../Components/Pages/BrowseRestaurants";
import CartSummary from "../Components/Pages/CartSummary";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RestaurantMenu" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/restaurants" element={<BrowseRestaurants />} />
      <Route path="/cart" element={<CartSummary />} />
    </Routes>
  );
}
