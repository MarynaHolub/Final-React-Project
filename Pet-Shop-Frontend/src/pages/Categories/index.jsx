import styles from '../../styles/common.module.css';
import CategoriesList from '../../components/CategoriesList';
import BreadCrumbs from '../../components/BreadCrumbs';

function Categories() {
  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <h2 className={styles.title}>Categories</h2>
      <CategoriesList />
    </div>
  );
}
export default Categories;
