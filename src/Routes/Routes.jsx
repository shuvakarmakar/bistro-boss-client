import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "additem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      }
    ]
  }
]);

export default router;