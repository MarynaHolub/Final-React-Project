import Categories from '../../components/Categories';
import RegistrFormDiscount from '../../components/RegistrFormDiscount';
import Sale from '../../components/Sale';
import styles from './Main.module.css';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <main>
      <div>
        <section className={styles.checkDiscountSection}>
          <h1 className={styles.checkDiscountTitle}>
            Amazing Discounts on Pets Products!
          </h1>
          <button className={styles.checkDiscountButton}>Check out</button>
        </section>

        <section className={`${styles.categoriesSection} ${styles.container}`}>
          <div className={styles.blockTitle}>
            <h2 className={styles.title}>Categories</h2>
            <div className={styles.divider}></div>
            <NavLink to="/categories" className={styles.allLink}>
              <h5>All categories</h5>
            </NavLink>
          </div>
          <Categories limit={4} />
        </section>

        <section className={styles.registrFormDiscountSection}>
          <RegistrFormDiscount />
        </section>

        <section className={`${styles.saleSection} ${styles.container}`}>
          <div className={styles.blockTitle}>
            <h2 className={styles.title}>Sale</h2>
            <div className={styles.divider}></div>
            <NavLink to="/sale" className={styles.allLink}>
              <h5>All sales</h5>
            </NavLink>
          </div>
          <Sale limit={4}/>
        </section>
      </div>
    </main>
  );
}
export default Main;
