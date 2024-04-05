import { getRestaurantAll } from "@/service/restaurant";
import { RestaurantResponse } from "@/service/restaurant/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [restaurantList, setRestaurantList] = useState<RestaurantResponse[]>(
    [],
  );

  const fetchAllRestaurants = async () => {
    try {
      const response = await getRestaurantAll();
      setRestaurantList(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  return (
    <div className="min-h-[90svh]">
      <div className="flex justify-center p-6">
        <div className="flex max-w-96 flex-col p-12 rounded-3xl shadow-md shadow-neutral-100">
          <h1 className="text-neutral-900 font-bold text-center text-lg">
            Lista de restaurantes
          </h1>
          <nav className="mt-4">
            <ul className="flex flex-col gap-4 items-center justify-center">
              {restaurantList.map((restaurant, index) => (
                <li key={restaurant?.id || index}>
                  <Link to={`/${restaurant.url}`}>{restaurant?.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
