import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks/thunks';
import styles from '../../styles/common.module.css';
// import { NavLink } from 'react-router-dom';
// import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import { breadcrumbConfig } from '../../routes/breadcrumbConfig';
import ProductsFilter from '../../components/ProductsFilter';


function Products({ limit }) {
  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <h1 className={styles.title}>All products</h1>

      <ProductsFilter
        products={limit ? productsList.slice(0, limit) : productsList}
        parentItems={[
          {
            to: '/products',
            label: breadcrumbConfig.products,
          },
        ]}
      />
    </div>
  );
}
export default Products;
