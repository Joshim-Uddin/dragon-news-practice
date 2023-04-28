import About from "../About/About";
import Career from "../Career/Career";
import Category from "../Category/Category";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";

import { Navigate, createBrowserRouter } from "react-router-dom";
import News from "../Pages/News";
import PrivateRoutes from "./PrivateRoutes";
import SignUpUser from "../SignUpUser/SignUpUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Category />,
            loader: () => fetch(`http://localhost:5000/categories/0`),
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoutes>
        <News />
      </PrivateRoutes>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUpUser />,
  },
]);
export default router;
