import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../styles/common.module.css';
import BreadCrumbs from '../../components/BreadCrumbs';
import ProductsFilter from '../../components/ProductsFilter';
import { fetchProducts } from '../../redux/thunks/thunks';

function Sale() {
  const dispatch = useDispatch();

  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  const saleProducts = productsList.filter((product) => product.discont_price);

  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <h1 className={styles.title}>Discounted items</h1>
      <ProductsFilter products={saleProducts} showDiscounted={false} />
    </div>
  );
}

export default Sale;
