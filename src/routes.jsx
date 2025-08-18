import { Navigate } from "react-router-dom";
import App from "./App";
import Browse from "./Browse";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "browse", element: <Browse /> },
      { path: "", element: <Navigate to={`home`} /> },
    ],
  },
];

export default routes;
