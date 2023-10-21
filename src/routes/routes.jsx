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
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/my-cart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/my-cart')
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
        element: <PrivateRoutes><Brand></Brand></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.brandName}`)
      },
      {
        path: '/bikes/:brandName/:id',
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.brandName}/${params.id}`)
      }
      
    ],
  },
]);

export default routes;
