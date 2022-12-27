import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

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
          <Suspense
            fallback={
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
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </main>
      {/* <footer><Footer/></footer> */}
    </>
  );
}
