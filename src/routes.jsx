import { Navigate } from "react-router-dom";
import App from "./App";
import ProductView from "./components/ProductView";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "browse", element: <Browse /> },
      { path: "browse/:id", element: <ProductView /> },
      { path: "", element: <Navigate to={`home`} /> },
    ],
  },
];

export default routes;
