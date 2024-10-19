import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstruturaPagina from "../pages/EstruturaPagina";
import Home from "../pages/Home";
import Result from "../pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EstruturaPagina />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

export default function Rotas() {
  return <RouterProvider router={router} />;
}
