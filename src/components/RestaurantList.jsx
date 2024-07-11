import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurantApi";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
