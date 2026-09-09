
import { API_URL } from '../../constants/api';
import styles from './ProductPage.module.css';

import { useParams, useLocation } from 'react-router-dom';

import { fetchProducts } from '../../redux/thunks/thunks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BreadCrumbs from '../../components/BreadCrumbs';

function ProductPage() {
  const { id } = useParams();

  // Получаем state, который передал NavLink
  const location = useLocation();

  // Получаем цепочку предыдущих страниц
  const breadcrumb = location.state?.breadcrumb;

  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsList.length]);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  const product = productsList.find(
    (product) => product.id === Number(id),
  );

  if (!product) {
    return <p>Такой товар не найден</p>;
  }

  return (
    <div>
      <BreadCrumbs
        productName={product.title}
        parentItems={breadcrumb}
      />

      <img
        src={`${API_URL}${product.image}`}
        alt="Product-image"
        className={styles.img}
      />

      <div>
        <h1 className={styles.title}>{product.title}</h1>

        <div>
          <h2>${product.discont_price}</h2>
          <p>${product.price}</p>
        </div>

        <div>
          <input type="number" />
          <button type="submit">Add to cart</button>
        </div>

        <div>
          <h3>Description</h3>

          <p>
            {product.description.length > 500
              ? `${product.description.slice(0, 500)}...`
              : product.description}
          </p>

          <details>
            <summary>Read more</summary>
            <p>{product.description}</p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;