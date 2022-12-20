import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.link)}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.link)}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
        {/* <li className={css.item}>
        <NavLink className={({ isActive }) => (isActive ? css.active : css.link)}
></NavLink>
      </li> */}
      </ul>
    </nav>
  );
}
