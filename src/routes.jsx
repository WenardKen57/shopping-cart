import { Navigate } from "react-router-dom";
import App from "./App";
import ProductView from "./components/ProductView";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "browse", element: <Browse /> },
      { path: "browse/:id", element: <ProductView /> },
      { path: "carts", element: <Cart /> },
      { path: "", element: <Navigate to={`home`} /> },
    ],
  },
];

export default routes;
