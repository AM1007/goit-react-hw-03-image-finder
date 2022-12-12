import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '32013564-eb97bf6234748c3565a98072a';
const PARAM =
  'per_page=12&orientation=horizontal&image_type=photo&safesearch=true';

const getImages = async (searchQuery, page) => {
  const { data } = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&page=${page}&${PARAM}`
  );
  return data;
};

export { getImages };
