import axios from 'axios';

const API_URL: string = 'https://the-one-api.dev/v2';
const ACCESS_TOKEN: string = 'LrzN3JnAO8C4_Z4-ot9G';

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

export function getMovies(filter?: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getMovieById(id: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getQuotesByMovieId(id: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie/${id}/quote`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getQuotes(filter?: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/quote`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getQuoteById(id: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/quote/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getMovies, getMovieById, getQuotesByMovieId, getQuotes, getQuoteById };