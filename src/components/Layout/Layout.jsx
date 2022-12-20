import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      {/* <footer><Footer/></footer> */}
    </>
  );
}
