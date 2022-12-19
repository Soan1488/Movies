import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        {/* <li>
        <NavLink></NavLink>
      </li> */}
      </ul>
    </nav>
  );
}
