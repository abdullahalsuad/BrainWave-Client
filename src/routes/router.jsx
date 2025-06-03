import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
