import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
