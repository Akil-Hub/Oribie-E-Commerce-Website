import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";

import Shop from "@/pages/Shop";
import SingleProduct from "@/components/common/SingleProduct";

 



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
