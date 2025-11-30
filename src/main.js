import iziToast from 'izitoast';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let query;
let page;
let totalPages;
const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

form.addEventListener('submit', formSubmitHandler);
loadMoreButton.addEventListener('click', loadMoreButtonHandler);

async function formSubmitHandler(e) {
  e.preventDefault();
  const queryCandidate = form.elements['search-text'].value.trim();
  if (!queryCandidate) {
    return;
  }
  query = queryCandidate;
  page = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();
  form.reset();
  try {
    const { hits: images, totalHits: totalImages } = await getImagesByQuery(
      query,
      page
    );
    totalPages = Math.ceil(totalImages / 15);
    if (totalPages > 1) {
      showLoadMoreButton();
    }
    images.length > 0
      ? createGallery(images)
      : showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
  } catch (err) {
    console.error(err);
  }
  hideLoader();
}

async function loadMoreButtonHandler() {
  page += 1;
}

function showMessage(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    maxWidth: '432px',
  });
}
