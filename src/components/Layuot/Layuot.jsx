import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer><Footer/></footer> */}
    </>
  );
}
