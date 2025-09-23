import React from "react";
// import Navbar from "../components/Navbar";
import NewNavbar from "../components/newNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NewNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
