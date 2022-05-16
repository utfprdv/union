import { Outlet, RouteObject } from "react-router-dom";
import Forum from "./Forum/Forum";
import Forums from "./Forums/Forums";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "forum",
        element: <Forums />,
      },
      {
        path: "forum/:forumId",
        element: <Forum />,
      },
      {
        path: "perfil",
        element: <Profile />,
      },
      {
        path: "perfil/:perfilId",
        element: <Profile />,
      },
    ],
  },
];

export default routes;
