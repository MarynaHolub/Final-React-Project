import styles from '../../styles/common.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { breadcrumbConfig } from '../../routes/breadcrumbConfig';
import { fetchProducts, fetchCategories } from '../../redux/thunks/thunks';

// import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import ProductsFilter from '../../components/ProductsFilter';

function ProductsFromCategory() {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Получаем товары из Redux
  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );

  // Получаем категории из Redux
  const { categoriesList, status: categoriesStatus } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  // Находим текущую категорию
  const category = categoriesList.find(
    (category) => String(category.id) === id,
  );

  // Оставляем только товары текущей категории
  const categoryProducts = productsList.filter(
    (product) => product.categoryId === Number(id),
  );

  if (status === 'loading' || categoriesStatus === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <BreadCrumbs categoryName={category?.title} />

      <h1 className={styles.title}>{category?.title}</h1>

      <ProductsFilter
        products={categoryProducts}
        breadcrumb={[
        // parentItems={[
          {
            label: 'Categories',
            // label: breadcrumbConfig.categories,
            to: '/categories',
          },
          {
            label: category?.title,
            to: `/categories/${category?.id}`,
          },
        ]}
      />
    </div>
  );
}

export default ProductsFromCategory;
