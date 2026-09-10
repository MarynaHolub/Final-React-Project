import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem';
import SectionTitle from '../../components/SectionTitle';
import OrderDetails from '../../components/OrderDetails';

import styles from './Cart.module.css';
import { NavLink } from 'react-router-dom';

function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);

  

  return (
    <div className={styles.container}>
      <SectionTitle name="Shopping cart" link="Back to the store" />

      <div className={styles.content}>
        {cartList.length === 0 ? (
          <div>
            <p className={styles.cartTitle}>
              Looks like you have no items in your basket currently.
            </p>
            <NavLink to="/products" className={styles.link}>
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className={styles.cartList}>
            {cartList.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {cartList.length > 0 && <OrderDetails />}
      </div>
    </div>
  );
}

export default Cart;
