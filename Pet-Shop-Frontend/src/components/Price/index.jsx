import styles from './Price.module.css';
import { calculateDiscount } from '../../utils/calculateDiscount';


function Price({ price, discountPrice }) {
  const discount = calculateDiscount(price, discountPrice);
  
  return (
    <div className={styles.blockPrice}>
      
      {discountPrice ? (
        <div className={styles.extraBlock}>
          
          <span className={styles.discontPrice}>${discountPrice}</span>
          <span className={styles.price}>${price}</span>
          {discount && (
            <span className={styles.discount}>-{discount}%</span>
          )}
        </div>
      ) : (
        <p className={styles.discontPrice}>${price}</p>
      )}
    </div>
  );
}
export default Price;
