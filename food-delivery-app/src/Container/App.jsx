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
import Profile from "../Components/Pages/profile";
import Header from "../Components/Core/Header";

import AllProducts from "../Components/Pages/AllProducts";

// function App() {
//   return (
//     <>
//       {/* <Theme>
//         <Home />
//       </Theme> */}

//       {/* <Profile /> */}
//       {/* <AllProducts/> */}
//     </>
//   );
// }

// export default App;

// Main App Component
const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Outlet context={{ searchQuery, selectedCategory, setSelectedCategory }} />
    </>
  );
};

// Home page content (without Header)
const HomeContent = () => {
  const { searchQuery, selectedCategory, setSelectedCategory } = useOutletContext();
  return <AllProducts searchQuery={searchQuery} selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />;
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
