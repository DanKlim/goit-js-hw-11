import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  showLoader();
  clearGallery();

  if (event.currentTarget.elements['search-text'].value.trim() === '') {
    hideLoader();
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      maxWidth: 432,
    });
    return;
  }

  const query = event.currentTarget.elements['search-text'].value.trim();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          title: 'Oops!',
          message: 'No images found. Try another search.',
          position: 'topRight',
        });
        return;
      }
      hideLoader();
      clearGallery();
      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        position: 'topRight',
        message: error.message,
        maxWidth: 432,
      });
    });
}

// const images = getImagesByQuery(input);

// createGallery(images);
