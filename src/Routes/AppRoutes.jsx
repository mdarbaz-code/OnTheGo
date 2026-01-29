import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
<<<<<<< HEAD
import BrowseRestaurants from "../Components/Pages/BrowseRestaurants";
import CartSummary from "../Components/Pages/CartSummary";

=======
>>>>>>> f83dda139e304ad7d93b695ef140f8d8c6a9b912

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
      <Route path="/RestaurantMenu" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/restaurants" element={<BrowseRestaurants />} />
      <Route path="/cart" element={<CartSummary />} />
=======
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
>>>>>>> f83dda139e304ad7d93b695ef140f8d8c6a9b912
    </Routes>
  );
}
