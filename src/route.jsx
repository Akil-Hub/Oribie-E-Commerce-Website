import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";

import Shop from "@/pages/Shop";
import SingleProduct from "@/components/common/SingleProduct";
import CartPage from "@/pages/CartPage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";

 



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,

    children: [
      {
        index:true,
        element: <Home  />,
      },
      {
        path: "shop",
        element: <Shop />,

      },
      {
        path: "cart",
        element: <CartPage />,

      },
      {
        path: "login",
        element: <LoginPage />,

      },
      {
        path: "signUp",
        element: <SignUpPage />,

      },
      {
        path: "shop/products/:productId",
        loader:async({params})=>await axios.get(`https://dummyjson.com/products/${params.productId}`),
        element: <SingleProduct />,

      },
    
      {
        path: "products/:productId",
        loader:async({params})=>await axios.get(`https://dummyjson.com/products/${params.productId}`),
        element: <SingleProduct />,


      },
    
    
    ],

    
  },
]);
