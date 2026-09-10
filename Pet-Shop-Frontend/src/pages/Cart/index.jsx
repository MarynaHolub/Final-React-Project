
import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem';
import SectionTitle from '../../components/SectionTitle';
import OrderDetails from '../../components/OrderDetails';

import styles from './Cart.module.css';

function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);

  console.log('Cart:', cartList);


  return (
    <div>
      <SectionTitle
        name="Shopping cart"
        link="Back to the store"
      />

      {cartList.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={styles.cartList}>
          {cartList.map((product) => (
            <CartItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <OrderDetails />
    </div>
  );
}

export default Cart;

