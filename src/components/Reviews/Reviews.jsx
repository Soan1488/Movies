import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../servises/MoviesApi';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    reviews && (
      <ul className={css.list}>
        {reviews.map(({ id, content, author }) => (
          <li key={id} className={css.item}>
            <p className={css.author}>{`Author: ${author}`}</p>
            <p className={css.content}>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
}
