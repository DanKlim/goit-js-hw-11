import axios from 'axios';

const API_KEY = '50595861-e3300a20d14d5dbbfabcd1d5e';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('Помилка при запиті:', error);
      throw error;
    });
}
