import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks/thunks';
import styles from './Products.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

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
    <ul className={styles.productsWrapper}>
      {productsList.slice(0, limit).map((product) => (
        <li key={product.id}>
          <NavLink to={`/products/${product.id}`} className={styles.link}>
            <ProductCard product={product} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default Products;
