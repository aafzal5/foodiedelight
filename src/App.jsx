import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { getRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from '@/api/restaurantApi';
import RestaurantItem from '@/components/RestaurantItem';
import RestaurantFormModal from '@/components/RestaurantFormModal';
import ConfirmationModal from '@/components/ConfirmationModal';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurantToDelete, setRestaurantToDelete] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  const handleAddRestaurant = () => {
    setSelectedRestaurant(null);
    setIsFormModalOpen(true);
  };

  const handleEditRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsFormModalOpen(true);
  };

  const handleDeleteRestaurant = (restaurant) => {
    setRestaurantToDelete(restaurant);
    setIsConfirmationModalOpen(true);
  };

  const handleFormSuccess = async (restaurant, isEditing) => {
    if (isEditing) {
      await updateRestaurant(restaurant.id, restaurant);
    } else {
      await addRestaurant(restaurant);
    }
    setIsFormModalOpen(false);
    const data = await getRestaurants();
    setRestaurants(data);
  };

  const handleConfirmDelete = async () => {
    await deleteRestaurant(restaurantToDelete.id);
    setIsConfirmationModalOpen(false);
    const data = await getRestaurants();
    setRestaurants(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center p-4 bg-white shadow-md mb-4">
        <h1 className="text-xl font-bold">Restaurant Manager</h1>
        <Button variant="primary" onClick={handleAddRestaurant}>
          Add Restaurant
        </Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onEdit={() => handleEditRestaurant(restaurant)}
            onDelete={() => handleDeleteRestaurant(restaurant)}
          />
        ))}
      </div>
      <RestaurantFormModal
        isOpen={isFormModalOpen}
        onRequestClose={() => setIsFormModalOpen(false)}
        onSuccess={handleFormSuccess}
        restaurant={selectedRestaurant}
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onRequestClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete the restaurant ${restaurantToDelete?.name}?`}
      />
    </div>
  );
};

export default App;
