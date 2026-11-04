import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = input.value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query.Please try again!',
        });
        return;
      }
      createGallery(data.hits);
      hideLoader();
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader();
    });
});
