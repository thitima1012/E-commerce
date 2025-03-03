import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import "./main.css"
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;