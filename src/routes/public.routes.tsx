import { productMockApi } from "@/mock/product";
import Business from "@/screens/public/Business";
import BusinessLayout from "@/screens/public/BusinessLayout";
import Home from "@/screens/public/Home";
import Products from "@/screens/public/Products";
import RootLayout from "@/screens/public/RootLayout";
import { getRestaurantSearchUrl } from "@/service/restaurant";
import { createBrowserRouter, redirect } from "react-router-dom";

export const Public = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/:businessId",
    element: <BusinessLayout />,
    children: [
      {
        path: "/:businessId",
        element: <Business />,
        loader: async ({ params }) => {
          if (!params.businessId) return;
          const response = await getRestaurantSearchUrl({
            url: params.businessId,
          });
          if (!response.id) return redirect("/");
          return response;
        },
      },
    ],
  },
  {
    path: "/:businessId/product/:productId",
    element: <Products />,
    loader: async () => {
      return productMockApi;
    },
  },
]);
