import { useEffect, useState } from 'react';

import { getTrendMovies } from 'components/MoviesApi';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    getTrendMovies().then(setTrendMovies);
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {trendMovies && (
        <ul className={css.list}>
          {trendMovies.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id} className={css.item}>
                <Link className={css.link} to={`movies/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500//${poster_path}`}
                    alt={original_title}
                    width="250"
                  />
                  <p className={css.text}>{original_title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
