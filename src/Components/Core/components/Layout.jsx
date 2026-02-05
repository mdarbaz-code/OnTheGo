import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    const location = useParams();
    useEffect(() => { window.scrollTo(0, 0); },[location]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
