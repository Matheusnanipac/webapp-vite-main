import { createBrowserRouter } from "react-router-dom";

export const Private = createBrowserRouter([
  {
    path: "/",
    element: <div>Você está em uma rota privada</div>,
  },
]);
