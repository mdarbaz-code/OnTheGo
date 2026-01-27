import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import RestaurantMenu from "../Components/Pages/RestaurantMenu";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
    </Routes>
  );
}
