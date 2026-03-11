import { RouterProvider } from "react-router-dom";
import { router } from "./route.jsx";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
