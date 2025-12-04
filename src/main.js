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
let currentPage;
let totalPages;
const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

form.addEventListener('submit', formSubmitHandler);
loadMoreButton.addEventListener('click', loadMore);

async function formSubmitHandler(e) {
  e.preventDefault();
  const queryCandidate = form.elements['search-text'].value.trim();
  if (!queryCandidate) {
    showMessage(
      `Search query cannot be empty. Please type something in the form`,
      'yellow'
    );
    return;
  }
  hideLoadMoreButton();
  showLoader();
  clearGallery();

  query = queryCandidate;
  currentPage = 1;

  try {
    const { hits: images, totalHits: totalImages } = await getImagesByQuery(
      query,
      currentPage
    );

    if (images.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideLoader();
      return;
    }
    totalPages = Math.ceil(totalImages / 15);
    createGallery(images);
    if (totalPages > 1) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      showMessage(`We're sorry, but you've reached the end of search results`);
    }
    form.reset();
  } catch (err) {
    console.error(err);
    showMessage(
      `Oops! Something went wrong with the API call. Please refresh the page or try again`,
      'red'
    );
  }
  hideLoader();
}

async function loadMore() {
  showLoader();
  currentPage += 1;
  try {
    const { hits: images } = await getImagesByQuery(query, currentPage);
    createGallery(images);
    scrollGallery();
    if (currentPage === totalPages) {
      hideLoadMoreButton();
      showMessage(`We're sorry, but you've reached the end of search results`);
    }
  } catch (err) {
    console.error(err);
    showMessage(
      `Oops! Something went wrong with the API call. Please refresh the page or try again`,
      'red'
    );
  }
  hideLoader();
}

function showMessage(message, color) {
  iziToast.show({
    message: message,
    position: 'topRight',
    maxWidth: '432px',
    color: color ? color : 'blue',
  });
}

function scrollGallery() {
  const card = document.querySelector('.gallery-item');
  const cardHeight = card.getBoundingClientRect().height;
  const gapPx = getComputedStyle(document.querySelector('.gallery')).gap;
  const gap = parseInt(gapPx, 10);
  const scrollHeight = cardHeight * 2 + gap;

  window.scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
}
