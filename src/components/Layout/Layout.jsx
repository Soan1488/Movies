import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
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
