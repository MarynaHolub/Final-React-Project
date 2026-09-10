import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import notFound from '../../assets/img/404.png'



function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <img src={notFound} alt="404" />
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.info}>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
    </main>
  );
}
export default NotFoundPage;
