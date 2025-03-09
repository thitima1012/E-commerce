import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";
import Cart from "../pages/Cart/Index";
import UserProfile from "../pages/Setting/Index";
import Profile from "../pages/Profile/Index";
import Dashboard from "../pages/Dashboard/Index";
import AddProduct from "../pages/AddProduct/Index";
import ManageItems from "../pages/ManageItems/Index";
import AllUsers from "../pages/AllUser/Index";

import ProtectPage from "../pages/ProtectPage/Index";
import AdminRoute from "../pages/ProtectRoute/AdminRoute";

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
        element: (
          <ProtectPage>
            <Cart />
          </ProtectPage>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectPage>
            <UserProfile />
          </ProtectPage>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectPage>
            <Profile />
          </ProtectPage>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;