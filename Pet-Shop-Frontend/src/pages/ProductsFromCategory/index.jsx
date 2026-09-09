
import styles from '../../styles/common.module.css';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProducts,
  fetchCategories,
} from '../../redux/thunks/thunks';

import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';

function ProductsFromCategory() {
   const { id } = useParams();

  const dispatch = useDispatch();

  // Получаем товары из Redux
  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );

  // Получаем категории из Redux
  const {
    categoriesList,
    status: categoriesStatus,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  // Находим текущую категорию
  const category = categoriesList.find(
    (category) => String(category.id) === id,
  );

  if (status === 'loading' || categoriesStatus === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <BreadCrumbs categoryName={category?.title} />

      <h1 className={styles.title}>{category?.title}</h1>

      <ul className={styles.productsWrapper}>
        {productsList
          .filter((product) => product.categoryId === Number(id))
          .map((product) => (
            <li key={product.id}>
              <NavLink // передаем также состояние, т.е. откуда переходим
                to={`/products/${product.id}`}
                className={styles.link}
                state={{
                  breadcrumb: [
                    {
                      label: 'Categories',
                      to: '/categories',
                    },
                    {
                      label: category?.title,
                      to: `/categories/${category?.id}`,
                    },
                  ],
                }}
              >
                <ProductCard product={product} />
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductsFromCategory;
