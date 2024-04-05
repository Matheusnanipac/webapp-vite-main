import { BASE_URL } from "../api";
import { BusinessResponse, GetBusinessIdParams } from "./types";

const getBusiness = async (): Promise<BusinessResponse[]> => {
  const response = await fetch(`${BASE_URL}business`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const getBusinessId = async (
  params: GetBusinessIdParams,
): Promise<BusinessResponse> => {
  const response = await fetch(`${BASE_URL}business/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export { getBusiness, getBusinessId };
