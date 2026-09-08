import styles from '../../styles/common.module.css';
import BreadCrumbs from '../../components/BreadCrumbs';
import SaleList from '../../components/SalesList';

function Sale() {
 
  return (
    <div className={styles.container}>
     <BreadCrumbs />
      <h2 className={styles.title}>Discounted items</h2>
      <SaleList/>
    </div>
  );
}
export default Sale;
