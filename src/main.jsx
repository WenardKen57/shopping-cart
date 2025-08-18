import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import NavigationBar from "./NavigationBar";
import "./joshCameauReset.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationBar />
    <RouterProvider router={router} />
  </StrictMode>
);
