import axios from 'axios';

export default async function getImagesByQuery(query, page) {
  const params = {
    key: '53321063-39b236969f2c986560565235a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };
  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data;
}
