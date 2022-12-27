import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getTrendMovies } from 'servises/MoviesApi';
import ShowMoreBtn from 'components/ShowMoreBtn/ShowMoreBtn';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [ShowBtn, setShowBtn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getTrendMovies(page)
      .then(({ data, total_pages }) => {
        setTrendMovies(prevMovies => [...prevMovies, ...data.results]);
        page >= total_pages ? setShowBtn(false) : setShowBtn(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const buttonHendler = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {trendMovies.length > 0 && (
        <>
          <ul className={css.list}>
            {trendMovies.map(({ id, original_title, poster_path }) => {
              return (
                <li key={id} className={css.item}>
                  <Link
                    className={css.link}
                    to={`movies/${id}`}
                    state={{ from: location }}
                  >
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
          {ShowBtn && <ShowMoreBtn onClick={buttonHendler} />}
        </>
      )}
      {loading && (
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
      )}
    </>
  );
}
