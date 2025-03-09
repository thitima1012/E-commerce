import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Main.css"
const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;