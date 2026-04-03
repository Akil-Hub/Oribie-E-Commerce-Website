import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import { DataProvider } from "@/components/contexts/dataContext";
import { FilterProvider } from "@/components/contexts/filterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </DataProvider>
  </StrictMode>,
);
