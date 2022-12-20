import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from 'components/MoviesApi';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);
  return (
    movieDetails && (
      <>
        <button type="button">Go back</button>
        <div className="">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/w500//${movieDetails.backdrop_path}`}
              alt={movieDetails.original_title}
            />
          </div>
          <div className="">
            <h2>{`${
              movieDetails.original_title
            } (${movieDetails.release_date.slice(0, 4)})`}</h2>
            <p>{`User rate: ${movieDetails.vote_average}`}</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
        <h3>Additional information</h3>
        <div className="">
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Outlet />
        </div>
      </>
    )
  );
}
