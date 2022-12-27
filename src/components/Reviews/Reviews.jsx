import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMovieReviews } from '../../servises/MoviesApi';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(resp => {
        setReviews(resp);
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
  ) : reviews.length > 0 ? (
    <ul className={css.list}>
      {reviews.map(({ id, content, author }) => (
        <li key={id} className={css.item}>
          <p className={css.author}>{`Author: ${author}`}</p>
          <p className={css.content}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.notifi}>Sorry, there aren't any reviews</p>
  );
}
