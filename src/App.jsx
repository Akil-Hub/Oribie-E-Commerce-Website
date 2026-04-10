import { RouterProvider } from "react-router-dom";
import { router } from "@/route.jsx";
import "@/App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/features/products/productSlice";
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
 
  }, [])
  return <RouterProvider router={router} />;
};

export default App;
