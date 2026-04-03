import { useDataContext } from "@/components/contexts/dataContext";
import { createContext, useContext, useState } from "react";


export const FilterContext = createContext()

export const FilterProvider  = ({children}) => {

    const{products} = useDataContext()

    const [query, setQuery] = useState('')
      const [isCategorySelected, setIsCategorySelected] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const [priceRange, setPriceRange] = useState(null)

    const search = (params) => {
        let filteredProducts = products
        // Searching From the navbar
        if(query){
            filteredProducts = products.filter(product => product.title.toLowerCase().trim().includes(query.toLowerCase().trim()))
        }


        // Search By selected Category

        if(selectedCategory){
            filteredProducts = filteredProducts.filter(({category,price,brand})=>
                category === selectedCategory ||
               
                brand === selectedCategory
                
            )
        }

        // Search by price range

        if(priceRange){
            filteredProducts = filteredProducts.filter(({price })=> price  > priceRange.min && price <= priceRange.max)

        }



        return filteredProducts
    };

    const finalFilteredProducts = search()

      const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
    return(
        <FilterContext.Provider value={{query,setQuery,finalFilteredProducts,categories,brands,setSelectedCategory,setPriceRange,isCategorySelected,setIsCategorySelected}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = (params) => {
    const context = useContext(FilterContext)
    return context
    
};