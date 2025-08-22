import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>HOme</div>,
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
