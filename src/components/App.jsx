import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Route>
    </Routes>
  );
};
