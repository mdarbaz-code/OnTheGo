// Plugins or Packages
import {
  createBrowserRouter,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";

// Components
import Home from "../Components/Pages/Home";
import Cart from "../Components/Pages/Cart";
import Profile from "../Components/Pages/Profile";
import Header from "../Components/Core/Header";
import AllProducts from "../Components/Pages/AllProducts";

// Main App Component
const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </>
  );
};

// Home page content (without Header)
const HomeContent = () => {
  const { searchQuery } = useOutletContext();
  return <AllProducts searchQuery={searchQuery} />;
};

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default appRouter;
