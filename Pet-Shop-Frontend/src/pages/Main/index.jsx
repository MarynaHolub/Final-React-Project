import { NavLink } from 'react-router-dom';
import CategoriesList from '../../components/CategoriesList';
import RegFormDiscount from '../../components/RegFormDiscount';
import SaleList from '../../components/SalesList';
import SectionTitle from '../../components/SectionTitle';
import styles from './Main.module.css';

function Main() {
  return (
    <main>
      <div>
        <section className={styles.checkDiscountSection}>
          <h1 className={styles.checkDiscountTitle}>
            Amazing Discounts on Pets Products!
          </h1>
          
          <NavLink to="/sale" className={styles.checkDiscountButton}>
            Check out
          </NavLink>
        </section>

        <section className={styles.container}>
          <SectionTitle name={'Categories'} link={'All categories'} />
          <CategoriesList limit={4} />
        </section>

        <section className={styles.regFormDiscount}>
          <RegFormDiscount />
        </section>

        <section className={styles.container}>
          <SectionTitle name={'Sale'} link={'All sales'} />
          <SaleList limit={4} />
        </section>
      </div>
    </main>
  );
}
export default Main;
