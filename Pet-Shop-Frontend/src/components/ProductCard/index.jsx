import { API_URL } from '../../constants/api';
import { calculateDiscount } from '../../utils/calculateDiscount';
import ButtonCart from '../UI/ButtonCart';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const discount = calculateDiscount(product.price, product.discont_price);
  return (
    <div className={styles.card}>
      <img
        src={`${API_URL}${product.image}`}
        alt="Product-image"
        className={styles.img}
      />
      <p className={styles.title}>{product.title}</p>

      <div className={styles.blockPrice}>
        {product.discont_price ? (
          <>
            <p className={styles.discontPrice}>${product.discont_price}</p>
            <p className={styles.price}>${product.price}</p>
          </>
        ) : (
          <p className={styles.discontPrice}>${product.price}</p>
        )}
      </div>

      {discount && <span className={styles.discount}>-{discount}%</span>}

      <div className={styles.buttonWrapper}>
        <ButtonCart>Add to cart</ButtonCart>
      </div>
    </div>
  );
}
export default ProductCard;
