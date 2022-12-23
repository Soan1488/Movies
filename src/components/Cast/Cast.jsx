import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredit } from 'servises/MoviesApi';
import css from './Cast.module.css';
import notFound from '../../images/not-found.png';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredit(movieId).then(setCast);
  }, [movieId]);

  return (
    cast && (
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
    )
  );
}
