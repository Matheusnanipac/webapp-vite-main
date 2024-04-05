import { RouterProvider } from "react-router-dom";
import { Private } from "./private.routes";
import { Public } from "./public.routes";

export default function Routes() {
  const isSignedIn = false;
  const router = isSignedIn ? Private : Public;

  return <RouterProvider router={router} />;
}
