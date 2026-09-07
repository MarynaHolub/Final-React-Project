import { API_URL } from '../../constants/api';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div>
      <img
        src={`${API_URL}${product.image}`}
        alt="Product-image"
        className={styles.img}
      />
      <p className={styles.title}>{product.title}</p>

      <div>
        <p>${product.discont_price}</p>
        <p>${product.price}</p>
      </div>
      {/* <p>-{discount}%</p> */}

      <button type="submit">Add to cart</button>
    </div>
  );
}
export default ProductCard;
