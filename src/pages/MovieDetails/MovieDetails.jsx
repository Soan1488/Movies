import { useState, Suspense, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMovieDetails } from 'servises/MoviesApi';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
      .then(resp => {
        setMovieDetails(resp);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  return loading ? (
    <ClipLoader
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
      color="#36d7b7"
      cssOverride={{
        margin: '50px auto',
        display: 'block',
      }}
    />
  ) : (
    movieDetails && (
      <>
        <div className={css.wrap}>
          <button
            type="button"
            className={css.btn}
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
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
                <Link
                  to="cast"
                  className={css.link}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Cast
                </Link>
              </li>
              <li className={css.item}>
                <Link
                  to="reviews"
                  className={css.link}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
        <div className={css.childPageWrap}>
          <Suspense
            fallback={
              <ClipLoader
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#36d7b7"
                cssOverride={{
                  margin: '50px auto',
                  display: 'block',
                }}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  );
}
