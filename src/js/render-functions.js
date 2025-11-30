import SimpleLightbox from 'simplelightbox';

const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');
const galleryElem = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlay: true,
  overlayOpacity: 0.8,
});

export function createGallery(images) {
  const markup = imagesTemplate(images);
  galleryElem.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreButton.classList.add('hidden');
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}

function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${likes}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Views</p>
        <p class="info-point-value">${views}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Comments</p>
        <p class="info-point-value">${comments}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Downloads</p>
        <p class="info-point-value">${downloads}</p>
      </li>
    </ul>
  </li>`;
}
