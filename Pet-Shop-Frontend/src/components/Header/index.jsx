import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import cart from '../../assets/icons/cart.svg';

function Header() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#0D50FF' : '#282828',
  });


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <nav className={styles.nav}>
          <NavLink style={linkStyle} to="/" className={styles.link}>
            Main Page
          </NavLink>
          <NavLink style={linkStyle} to="/categories" className={styles.link}>
            Categories
          </NavLink>
          <NavLink style={linkStyle} to="/products" className={styles.link}>
            All products
          </NavLink>
          <NavLink style={linkStyle} to="/sales" className={styles.link}>
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
