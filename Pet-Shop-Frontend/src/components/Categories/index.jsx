import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/thunks/thunks';
import CategoryCard from '../CategoryCard';
import styles from './Categories.module.css';

function Categories({limit}) {
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
   
      <ul className={styles.categoriesWrapper}>
        {categoriesList.slice(0, limit).map((category) => (
          <li key={category.id}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
   
  );
}
export default Categories;
