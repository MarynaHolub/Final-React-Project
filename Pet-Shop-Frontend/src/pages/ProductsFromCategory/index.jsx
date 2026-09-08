import styles from '../../styles/common.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks/thunks';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';

function ProductsFromCategory() {
  const { id } = useParams(); // useParams() достаёт значения динамических параметров из адресной строки
  //   console.log(id);

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
    <div>
      <div>
        <BreadCrumbs />
      </div>
      <h1 className={styles.title}>Categories</h1>
      <ul className={styles.productsWrapper}>
        {productsList
          .filter((product) => product.categoryId === Number(id))
          .map((product) => (
            <li key={product.id}>
              <NavLink to={`/products/${product.id}`} className={styles.link}>
                <ProductCard product={product} />
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ProductsFromCategory;
