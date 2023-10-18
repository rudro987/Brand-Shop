import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-inter bg-opacity-100 bg-[#001420] text-white">
      <Header></Header>
      <div className="bg-gradient-to-t from-[#141420a6] to-[#141420]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
