import { API_URL } from '../../constants/api';
import { calculateDiscount } from '../../utils/calculateDiscount';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {

  const discount = calculateDiscount(product.price,product.discont_price)
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

      <button type="submit" className={styles.button}>Add to cart</button>
    </div>
  );
}
export default ProductCard;
