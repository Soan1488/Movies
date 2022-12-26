import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import css from './Movies.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesByQuery } from 'servises/MoviesApi';

export default function Movies() {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getMoviesByQuery(searchParams.get('query')).then(setMoviesByQuery);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value.trim(' ') === '') {
      toast.error('Please write something!');
      return;
    }
    setSearchParams({ query: e.target.elements.search.value.trim(' ') });
    e.target.elements.search.value = '';
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
      {moviesByQuery && (
        <ul className={css.list}>
          {moviesByQuery.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id} className={css.item}>
                <Link className={css.link} to={`${id}`}>
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
