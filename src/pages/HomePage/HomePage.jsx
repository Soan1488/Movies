import { useEffect, useState } from 'react';

import { getTrendMovies } from 'components/MoviesApi';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    getTrendMovies().then(setTrendMovies).catch(console.error());
  }, []);

  return (
    trendMovies && (
      <ul>
        {trendMovies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    )
  );
}
