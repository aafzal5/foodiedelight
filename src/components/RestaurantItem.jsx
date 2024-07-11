/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

const RestaurantItem = ({ restaurant, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
      <p className="text-gray-600 mb-2">{restaurant.description}</p>
      <p className="text-gray-600 mb-4">{restaurant.location}</p>
      <div className="flex justify-between">
        <Button variant="secondary" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default RestaurantItem;
