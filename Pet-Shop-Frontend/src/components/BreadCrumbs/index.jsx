

import { Link, useLocation, useParams } from 'react-router-dom';
import { breadcrumbConfig } from '../../routes/breadcrumbConfig';
import styles from './BreadCrumbs.module.css';

function BreadCrumbs({
  categoryName,
  productName,
  parentItems = [],
}) {
  const { pathname } = useLocation();
  const { id } = useParams();

  const paths = pathname.split('/').filter(Boolean);

  const isCategoryPage = pathname.startsWith('/categories/');
  const isProductPage = pathname.startsWith('/products/');

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">

      {/* Всегда первый пункт */}
      <Link to="/" className={styles.item}>
        Main Page
      </Link>

      {/* Если это ProductPage и нам передали navigation state */}
      {isProductPage && parentItems.length > 0 ? (
        <>
          {/* Предыдущие страницы */}
          {parentItems.map((item) => (
            <div
              key={item.to}
              className={styles.wrapper}
            >
              <span className={styles.separator}></span>

              <Link
                to={item.to}
                className={styles.item}
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* Текущий товар */}
          <div className={styles.wrapper}>
            <span className={styles.separator}></span>

            <span
              className={`${styles.item} ${styles.current}`}
            >
              {productName}
            </span>
          </div>
        </>
      ) : (
        /*
          Если state нет, используем обычную
          логику на основе URL
        */
        paths.map((path, index) => {
          const isLast = index === paths.length - 1;

          const to =
            '/' + paths.slice(0, index + 1).join('/');

          let label;

          if (path === id) {
            if (isCategoryPage) {
              label = categoryName;
            }

            if (isProductPage) {
              label = productName;
            }
          } else {
            label = breadcrumbConfig[path] || path;
          }

          return (
            <div
              key={to}
              className={styles.wrapper}
            >
              <span className={styles.separator}></span>

              {isLast ? (
                <span
                  className={`${styles.item} ${styles.current}`}
                >
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className={styles.item}
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })
      )}
    </nav>
  );
}

export default BreadCrumbs;



