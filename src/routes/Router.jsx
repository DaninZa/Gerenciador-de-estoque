import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../components/LayoutBase";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Update from "../pages/Update";
import Create from "../pages/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "Products/details/:id",
        element: <Product />,
      },
      {
        path: "update/:id",
        element: <Update />,
      },
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
]);
export default router;
