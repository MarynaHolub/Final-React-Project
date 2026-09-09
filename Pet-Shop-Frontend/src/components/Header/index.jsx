import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cart from '../../assets/icons/cart.svg';

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          <img className={styles.logo} src='/logo.svg' alt="logo" />
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            Main Page
          </NavLink>
          <NavLink to="/categories" className={styles.link}>
            Categories
          </NavLink>
          <NavLink to="/products" className={styles.link}>
            All products
          </NavLink>
          <NavLink to="/sale" className={styles.link}>
            All sales
          </NavLink>
        </nav>
        <NavLink to="/cart" className={styles.link}>
          <img className={styles.cart} src={cart} alt="cart" />
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
