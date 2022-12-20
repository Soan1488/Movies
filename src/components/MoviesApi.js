import axios from 'axios';

const KEY = '0edadbafab79c4249d030320f49f37e6';

export async function getTrendMovies() {
  try {
    const response = await axios('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      console.log(error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const response = await axios('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: KEY,
        query,
      },
    });
    if (!response.ok) {
      throw new Error(`Sorry, we can't found your request ${query} `);
    }
    return response.data.results;
  } catch (error) {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      console.log(error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: KEY,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      console.log(error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

export async function getMovieCredit(id) {
  try {
    const response = await axios(
      'https://api.themoviedb.org/3/movies/get-movie-credits ',
      {
        params: {
          api_key: KEY,
          credit_id: id,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Sorry, we can't found your request ${id} `);
    }
    return response.data.results;
  } catch (error) {
    return console.log(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios(
      'https://api.themoviedb.org/3/movies/get-movie-reviews  ',
      {
        params: {
          api_key: KEY,
          review_id: id,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Sorry, we can't found your request ${id} `);
    }
    return response.data.results;
  } catch (error) {
    return console.log(error);
  }
}
