import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const createGallery = images => {
  const galleryMarkup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        views,
        downloads,
        likes,
        comments,
      } = image;
      return `<li class='gallery-item'>
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <ul class="image-info">
  <li class="info-item">
  <p class="info-title">Likes</p>
  <span class="info-value">${likes}</span></li>
  <li class="info-item">
  <p class="info-title">Views</p>
  <span class="info-value">${views}</span></li>
  <li class="info-item">
  <p class="info-title">Comments</p>
  <span class="info-value">${comments}</span></li>
  <li class="info-item">
  <p class="info-title">Downloads</p>
  <span class="info-value">${downloads}</span></li>
  </ul>
</li>
`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  const modal = new SimpleLightbox('.gallery a');
  modal.refresh();
};
export const clearGallery = () => {
  gallery.innerHTML = '';
};
export const showLoader = () => {
  loader.classList.remove('is-hidden');
};
export const hideLoader = () => {
  loader.classList.add('is-hidden');
};
