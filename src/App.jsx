import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Outlet></Outlet>
    </>
  );
}
