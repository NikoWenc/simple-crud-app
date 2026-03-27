import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import AddUserForm from "../components/AddUserForm";
import EditUserForm from "../components/EditUserForm";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
        children: [
          {
            index: true,
            element: <AddUserForm />,
          },
        ],
      },
      {
        path: "/editUser/:id",
        element: <EditUser />,
        children: [
          {
            index: true,
            element: <EditUserForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
