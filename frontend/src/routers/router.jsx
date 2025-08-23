import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>OrderPage</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
      {
        path: "/cart",
        element: <div>CartPage</div>,
      }
    ],
  },
]);

export default router;
