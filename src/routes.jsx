import Browse from "./Browse";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [{ path: "browse", element: <Browse /> }],
  },
];

export default routes;
