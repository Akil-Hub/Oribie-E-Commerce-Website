import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,

    // children: [
    //   {
    //     index:true,
    //     element: <Home />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "services",
    //     element: <Services />,
    //   },
    
    // ],
    
  },
]);
