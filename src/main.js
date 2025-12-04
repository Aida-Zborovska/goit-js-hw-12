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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showMessage(`We're sorry, but you've reached the end of search results`);
    }
  });
});

form.addEventListener('submit', formSubmitHandler);
loadMoreButton.addEventListener('click', loadMore);

async function formSubmitHandler(e) {
  e.preventDefault();
  const queryCandidate = form.elements['search-text'].value.trim();
  if (!queryCandidate) {
    return;
  }
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  query = queryCandidate;
  currentPage = 1;

  form.reset();
  try {
    const { hits: images, totalHits: totalImages } = await getImagesByQuery(
      query,
      currentPage
    );
    totalPages = Math.ceil(totalImages / 15);

    images.length > 0
      ? createGallery(images)
      : showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
    if (totalPages > 1) {
      showLoadMoreButton();
    }
    endGalleryHandler();
  } catch (err) {
    console.error(err);
  }
  hideLoader();
}

async function loadMore() {
  showLoader();
  currentPage += 1;
  try {
    const { hits: images } = await getImagesByQuery(query, currentPage);
    createGallery(images);
    endGalleryHandler();
    scrollGallery();
  } catch (err) {
    console.error(err);
  }
  hideLoader();
}

function showMessage(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    maxWidth: '432px',
    color: 'blue',
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

function endGalleryHandler() {
  if (currentPage !== totalPages) {
    return;
  }
  hideLoadMoreButton();
  const target = document.querySelector('.gallery .gallery-item:last-child');
  observer.observe(target);
}
