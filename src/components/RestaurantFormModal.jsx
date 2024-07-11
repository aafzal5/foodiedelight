/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const RestaurantFormModal = ({ isOpen, onRequestClose, onSuccess, restaurant }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name);
      setDescription(restaurant.description);
      setLocation(restaurant.location);
      setImage(restaurant.image);
    } else {
      setName('');
      setDescription('');
      setLocation('');
      setImage('');
    }
  }, [restaurant]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const restaurantData = { id: restaurant?.id, name, description, location, image };
    onSuccess(restaurantData, Boolean(restaurant));
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">{restaurant ? 'Edit Restaurant' : 'Add Restaurant'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image URL:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <Button type="button" variant="secondary" onClick={onRequestClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {restaurant ? 'Update' : 'Add'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default RestaurantFormModal;
