import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Layout from "pages/Layout";
import SighUp from "pages/SignUp";
import SignIn from "pages/SignIn";
import Todo from "pages/Todo";
import Notfound from "pages/Notfound";

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
        path: "/todo/tododetail",
        element: <Todo />,
      },
      {
        path: "/*",
        element: <Notfound />,
      },
    ],
  },
]);
