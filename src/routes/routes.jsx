import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import MyCart from "../pages/MyCart/MyCart";
import AddProduct from "../pages/AddProduct/AddProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default routes;
