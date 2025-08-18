import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Product from "./Product";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Outlet></Outlet>
    </>
  );
}
