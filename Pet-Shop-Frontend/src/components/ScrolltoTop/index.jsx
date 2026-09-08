import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // pathname маршрут

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);   // useEffect срабатывает каждый раз,когда pathname изменяется - новый маршрут

  return null;
}

export default ScrollToTop;