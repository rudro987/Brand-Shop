import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-inter bg-opacity-100 bg-white dark:bg-[#001420] text-black dark:text-white">
      <Header></Header>
      <div className="">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
