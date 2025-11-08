export const fetchPhotosByQuery = query => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '53124504-9ef9dc7d083288085c55b9d9d';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
