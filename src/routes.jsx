import { Navigate } from "react-router-dom";
import App from "./App";
import Browse from "./Browse";
import Home from "./Home";
import ProductView from "./components/ProductView";

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
