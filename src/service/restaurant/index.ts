import { BASE_URL } from "../api";
import { RestaurantResponse, RestaurantSearchUrlRequest } from "./types";

export const getRestaurantAll = async () => {
  const response = await fetch(`${BASE_URL}/restaurant/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await response.json();
  return data as RestaurantResponse[];
};

export const getRestaurantSearchUrl = async (
  params: RestaurantSearchUrlRequest,
) => {
  const response = await fetch(
    `${BASE_URL}/restaurant/searchUrl?url=${params.url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

  const data = await response.json();
  return data as RestaurantResponse;
};
