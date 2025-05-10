import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";
import Cart from "../pages/Cart/Index";
import ViewProfile from "../pages/ViewProfile";
import Setting from "../pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/profile",
        element:<ViewProfile/>
      },
      {
        path:"/setting",
        element:<Setting/>
      }
    ],
  },
]);

export default router;