import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import BrowseRestaurants from "../Components/Pages/BrowseRestaurants";
import CartSummary from "../Components/Pages/CartSummary";
import HelpPage from "../Components/Pages/HelpPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<BrowseRestaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<CartSummary />} />
      <Route path="/helpandsupport" element={<HelpPage />} />
    </Routes>
  );
}
