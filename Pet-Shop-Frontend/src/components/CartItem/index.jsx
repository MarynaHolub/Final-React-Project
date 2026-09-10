import { API_URL } from '../../constants/api';
import { useDispatch } from 'react-redux';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../redux/slices/cartSlice';

import QuantitySelector from '../QuantitySelector';
import styles from './CartItem.module.css';

function CartItem({ product }) {
  const dispatch = useDispatch();

  const currentPrice = product.product.discont_price
    ? product.product.discont_price
    : product.product.price;

  const totalPrice = currentPrice * product.count;

  return (
    <article className={styles.cartItem}>
      <img
        src={`${API_URL}${product.product.image}`}
        alt={product.product.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h2 className={styles.title}>{product.product.title}</h2>

        <QuantitySelector
          value={product.count}
          onChange={(value) => {
            if (value > product.count) {
              dispatch(increaseQuantity(product.product.id));
            } else if (value < product.count) {
              dispatch(decreaseQuantity(product.product.id));
            }
          }}
        />
      </div>

      <div className={styles.price}>
        ${currentPrice}
      </div>

      <div className={styles.totalPrice}>
        ${totalPrice}
      </div>

      <button
        type="button"
        className={styles.removeButton}
        onClick={() => dispatch(removeFromCart(product.product.id))}
      >
        ×
      </button>
    </article>
  );
}

export default CartItem;