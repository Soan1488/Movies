import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from 'servises/MoviesApi';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);
  return (
    movieDetails && (
      <>
        <div className={css.wrap}>
          <button type="button" className={css.btn}>
            Back
          </button>
          <div className={css.imgWrap}>
            <img
              src={`https://image.tmdb.org/t/p/w500//${movieDetails.backdrop_path}`}
              alt={movieDetails.original_title}
              className={css.img}
            />
          </div>
          <div className={css.detailsWrap}>
            <h2 className={css.title}>{`${
              movieDetails.original_title
            } (${movieDetails.release_date.slice(0, 4)})`}</h2>
            <p
              className={css.text}
            >{`User rate: ${movieDetails.vote_average}`}</p>
            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.text}>{movieDetails.overview}</p>
            <h3 className={css.subtitle}>Genres</h3>
            <p className={css.text}>
              {movieDetails.genres.map(({ name }) => name).join(', ')}
            </p>
          </div>
        </div>
        <div className={css.box}>
          <div className={css.subpageWrap}>
            <h3 className={css.subtitle}>Additional information</h3>

            <ul className={css.list}>
              <li className={css.item}>
                <Link to="cast" className={css.link}>
                  Cast
                </Link>
              </li>
              <li className={css.item}>
                <Link to="reviews" className={css.link}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
        <div className={css.childPageWrap}>
          <Outlet />
        </div>
      </>
    )
  );
}
