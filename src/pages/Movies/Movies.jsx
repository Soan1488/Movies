import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

import css from './Movies.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesByQuery } from 'servises/MoviesApi';
import ShowMoreBtn from 'components/ShowMoreBtn/ShowMoreBtn';

export default function Movies() {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [ShowBtn, setShowBtn] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    setLoading(true);

    getMoviesByQuery(searchParams.get('query'), page)
      .then(({ data: { total_pages, results } }) => {
        if (results.length <= 0) {
          toast.error(
            `Sorry, we can't find anything on your request ${searchParams.get(
              'query'
            )} `
          );
          return;
        }
        setMoviesByQuery(prevMovies => [...prevMovies, ...results]);
        page >= total_pages ? setShowBtn(false) : setShowBtn(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [page, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value.trim() === '') {
      toast.error(`Please, write a valid request`);
      return;
    } else if (
      e.target.elements.search.value.trim() === searchParams.get('query')
    ) {
      toast.error(`You already have a result for this query`);
      return;
    }
    setSearchParams({ query: e.target.elements.search.value.trim(' ') });
    setMoviesByQuery([]);
    e.target.elements.search.value = '';
  };

  const buttonHendler = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <input
            type="text"
            name="search"
            className={css.input}
            placeholder="Enter your search"
          />
        </label>
        <button type="submit" className={css.btn}></button>
      </form>
      {moviesByQuery.length > 0 && (
        <>
          <ul className={css.list}>
            {moviesByQuery.map(({ id, original_title, poster_path }) => {
              return (
                <li key={id} className={css.item}>
                  <Link
                    className={css.link}
                    to={`${id}`}
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
