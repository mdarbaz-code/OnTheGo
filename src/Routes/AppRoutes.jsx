import { Route, Routes } from "react-router-dom";

// pages components
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import BrowseRestaurants from "../Components/Pages/BrowseRestaurants";
import CartSummary from "../Components/Pages/CartSummary";
import PaymentsPage from "..//Components/Pages/PaymentsPage"
import HelpPage from "../Components/Pages/HelpPage";
import Layout from "../Components/Core/components/Layout";
import Profilepage from "../Components/Pages/Profilepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<BrowseRestaurants />} />
      <Route path="/profile" element={<Profilepage/>} />
      <Route path="/restaurants/:id" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<CartSummary />} />
      <Route path="/PaymentsPage" element={<PaymentsPage />} />
      <Route path="/helpandsupport" element={<HelpPage />} />
      </Route>
    </Routes>
  );
}
