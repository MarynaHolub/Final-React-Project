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
  const oldTotalPrice = product.product.price * product.count;

  return (
    <article className={styles.cartItem}>
      <img
        src={`${API_URL}${product.product.image}`}
        alt={product.product.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>{product.product.title}</h2>

          <button
            type="button"
            className={styles.removeButton}
            onClick={() => dispatch(removeFromCart(product.product.id))}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#282828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#282828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.flex}>
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

          <div>
            <span className={styles.totalPrice}>${totalPrice}</span>

            {product.product.discont_price && (
              <span className={styles.price}>${oldTotalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
