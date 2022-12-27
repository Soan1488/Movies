import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMovieCredit } from 'servises/MoviesApi';
import css from './Cast.module.css';
import notFound from '../../images/not-found.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    getMovieCredit(movieId)
      .then(resp => {
        setCast(resp);
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
  ) : cast.length > 0 ? (
    <ul className={css.list}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id} className={css.item}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200//${profile_path}`
                : notFound
            }
            alt={name}
            className={css.img}
          />
          <p className={css.name}>{name}</p>
          <p className={css.character}>{character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.notifi}>Sorry, there aren't any casts </p>
  );
}
