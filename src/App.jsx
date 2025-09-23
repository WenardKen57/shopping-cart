import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Outlet></Outlet>
    </>
  );
}
