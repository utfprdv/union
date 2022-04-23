import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <h1>Layout</h1>,
    children: [
      {
        path: "",
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "forum",
        element: <h1>Forum</h1>,
      },
      {
        path: "perfil",
        element: <h1>Perfil</h1>,
        children: [
          {
            path: "",
            element: <h2>Publicacoes</h2>,
          },
          {
            path: "projetos",
            element: <h2>Projetos</h2>,
          },
          {
            path: "experiencias",
            element: <h2>Experiencias</h2>,
          },
        ],
      },
    ],
  },
];

export default routes;
