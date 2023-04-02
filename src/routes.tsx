import { createBrowserRouter } from "react-router-dom";
import Home from "components/Home";
import Layout from "components/Layout";
import SighUp from "components/SignUp";
import SignIn from "components/SignIn";
import Todo from "components/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SighUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);
