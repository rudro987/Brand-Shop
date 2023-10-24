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
import UpdateProduct from "../pages/UpdateProducts/UpdateProduct";
import AddBrands from "../pages/AddProduct/AddBrands";

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
        loader: () => fetch('https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/my-cart')
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
        loader: ({params}) => fetch(`https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/bikes/${params.brandName}`)
      },
      {
        path: '/bikes/:brandName/:id',
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/bikes/${params.brandName}/${params.id}`)
      },
      {
        path: '/updateProducts/:id',
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/updateProducts/${params.id}`)
      },
      {
        path: '/addBrands',
        element: <PrivateRoutes><AddBrands></AddBrands></PrivateRoutes>,
      }
      
      
    ],
  },
]);

export default routes;
