// AppLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Skills, Footer } from './components'

const AppLayout = () => {
  const location = useLocation();

  const isNotFound = location.pathname === "/not-found";

  return (
    <div>
      <Nav/> 
      <Outlet />
      {!isNotFound && <Skills />}
      {!isNotFound && <Footer />}
    </div>
  );
};

export default AppLayout;
