import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/thunks/thunks';
import CategoryCard from '../../components/CategoryCard';
import styles from './CategoriesList.module.css';
import { NavLink } from 'react-router-dom';

function Categories({ limit }) {
  const { categoriesList, status, error } = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <ul className={styles.categoriesWrapper}>
        {categoriesList.slice(0, limit).map((category) => (
          <li key={category.id}>
            <NavLink to={`/categories/${category.id}`} className={styles.link}>
              <CategoryCard category={category} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
