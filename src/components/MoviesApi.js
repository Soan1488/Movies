import axios from 'axios';

const KEY = '0edadbafab79c4249d030320f49f37e6';

export async function getTrendMovies() {
  try {
    const response = await axios('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: KEY,
      },
    });
    if (response.ok) {
      throw new Error(`Sorry, we can't found popular films`);
    }
    return response.data.results;
  } catch (error) {
    return console.log(error);
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
    return console.log(error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios(
      'https://api.themoviedb.org/3//movies/get-movie-details',
      {
        params: {
          api_key: KEY,
          movie_id: id,
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
