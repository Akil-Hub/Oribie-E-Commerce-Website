import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";

  
 

    const productLoader  = async() => {

      const res = await axios.get('https://dummyjson.com/products')
      return res.data.products
      
    };
    

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,

    children: [
      {
        index:true,
        element: <Home  />,
        loader:productLoader,
      },
      {
        path: "shop",
        element: <ProductPage />,
        loader:productLoader,

      },
    
    
    ],
    
  },
]);
