import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cart from '../../assets/icons/cart.svg';
import { useSelector } from 'react-redux';

function Header() {

  const cartList = useSelector((state) => state.cart.cartList); const totalQuantity = cartList.reduce( (total, product) => total + product.count, 0 );

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
          {totalQuantity > 0 && ( <span className={styles.cartCount}>{totalQuantity}</span> )}
        </NavLink>
        
      </div>
    </header>
  );
}
export default Header;
