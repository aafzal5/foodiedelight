const API_URL = 'http://localhost:5000/restaurants';

export const getRestaurants = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addRestaurant = async (restaurant) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(restaurant),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
};

export const updateRestaurant = async (id, updatedRestaurant) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedRestaurant),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
};

export const deleteRestaurant = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
