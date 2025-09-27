import React from "react";
// import Navbar from "../components/Navbar";
import NewNavbar from "../components/newNavbar";
import MarqueeStrip from "../components/MarqueeStrip";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <MarqueeStrip />
      <NewNavbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
