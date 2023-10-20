import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import MyCart from "../pages/MyCart/MyCart";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoutes from "./privateRoutes";
import Brand from "../pages/Brands/Brand";
import ProductDetails from "../pages/Brands/productDetails";

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
      {
        path: '/bikes/:brandName',
        element: <Brand></Brand>,
        loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.brandName}`)
      },
      {
        path: '/bikes/:brandName/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.brandName}/${params.id}`)
      }
      
    ],
  },
]);

export default routes;
