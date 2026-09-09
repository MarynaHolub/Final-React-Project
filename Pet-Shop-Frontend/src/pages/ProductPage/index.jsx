import { API_URL } from '../../constants/api';
import styles from './ProductPage.module.css';

import { useParams, useLocation } from 'react-router-dom';

import { fetchProducts } from '../../redux/thunks/thunks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BreadCrumbs from '../../components/BreadCrumbs';
import { calculateDiscount } from '../../utils/calculateDiscount';

function ProductPage() {
  const { id } = useParams();

  // Получаем state, который передал NavLink
  const location = useLocation();

  // Получаем цепочку предыдущих страниц
  const breadcrumb = location.state?.breadcrumb;

  const { productsList, status, error } = useSelector(
    (state) => state.products,
  );

  const [isExpanded, setIsExpanded] = useState(false);

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

  const product = productsList.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Такой товар не найден</p>;
  }

  const discount = calculateDiscount(product.price, product.discont_price);

  return (
    <div className={styles.container}>
      <BreadCrumbs productName={product.title} parentItems={breadcrumb} />

      <div className={styles.contentWrapper}>
        <div className={styles.flex}>
          <img
            src={`${API_URL}${product.image}`}
            alt="Product-image"
            className={styles.img}
          />
          <img
            src={`${API_URL}${product.image}`}
            alt="Product-image"
            className={styles.img}
          />
          <img
            src={`${API_URL}${product.image}`}
            alt="Product-image"
            className={styles.img}
          />
        </div>

        <img
          src={`${API_URL}${product.image}`}
          alt="Product-image"
          className={styles.imgMain}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.blockPrice}>
            {product.discont_price ? (
              <div>
                <span className={styles.discontPrice}>
                  ${product.discont_price}
                </span>
                <span className={styles.price}>${product.price}</span>
              </div>
            ) : (
              <p className={styles.discontPrice}>${product.price}</p>
            )}

            {discount && <span className={styles.discount}>-{discount}%</span>}
          </div>

          <div className={styles.blockCountButton}>
            <div className={styles.blockWrapper}>
              <button className={styles.btn}>-</button>
              <input type="number" className={styles.count} />
              <button className={styles.btn}>+</button>
            </div>
            <button type="submit" className={styles.button}>
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h3 className={styles.title}>Description</h3>
            <p>
              {isExpanded
                ? product.description
                : product.description.length > 500
                  ? `${product.description.slice(0, 500)}...`
                  : product.description}
            </p>

            {product.description.length > 500 && (
              <button className={styles.readMore} type="button" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;
