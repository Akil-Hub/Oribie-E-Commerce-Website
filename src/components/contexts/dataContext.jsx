import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDaa = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=40");
      setProducts(res.data.products)
    };

getDaa()
    
  }, []);

  return (
    <DataContext.Provider value={{products,setProducts}}>
        {children}

    </DataContext.Provider>
  )


};

export const useDataContext = ()=>{
    const context = useContext(DataContext)
    return context
}