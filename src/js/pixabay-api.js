import axios from 'axios';
const API_KEY = '58395250-977497292cd8375f8180a3406';
const BASE_URL = 'https://pixabay.com/api/';
export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(responce => responce.data);
};
