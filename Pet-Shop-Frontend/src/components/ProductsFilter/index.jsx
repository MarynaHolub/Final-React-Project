import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ProductCard from '../ProductCard';
import styles from '../../styles/common.module.css';

function ProductsFilter({ products, breadcrumb, showDiscounted = true }) {


  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sort, setSort] = useState('default');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Фильтр по цене
    result = result.filter((product) => {
      const currentPrice = Number(product.discont_price ?? product.price);

      const from = priceFrom === '' ? 0 : Number(priceFrom);
      const to = priceTo === '' ? Infinity : Number(priceTo);

      return currentPrice >= from && currentPrice <= to;
    });

    // 2. Только товары со скидкой
    if (discountedOnly) {
      result = result.filter((product) => product.discont_price);
    }

    // 3. Сортировка
    if (sort === 'price-high') {
      result.sort(
        (a, b) =>
          Number(b.discont_price ?? b.price) -
          Number(a.discont_price ?? a.price),
      );
    }

    if (sort === 'price-low') {
      result.sort(
        (a, b) =>
          Number(a.discont_price ?? a.price) -
          Number(b.discont_price ?? b.price),
      );
    }

    if (sort === 'newest') {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [products, priceFrom, priceTo, discountedOnly, sort]);

  return (
    <div>
      <div className={styles.blockFilterSort}>
        <label>
          <span>Price </span>
          <input
            className={styles.input}
            type="number"
            min="0"
            value={priceFrom}
            onChange={(event) => setPriceFrom(event.target.value)}
            placeholder="from"
          />
          <input
            className={styles.input}
            type="number"
            min="0"
            value={priceTo}
            onChange={(event) => setPriceTo(event.target.value)}
            placeholder="to"
          />
        </label>

        {showDiscounted && (
          <label className={styles.checkbox}>
            Discounted items
            <input
              type="checkbox"
              checked={discountedOnly}
              onChange={(event) => setDiscountedOnly(event.target.checked)}
            />
            <span className={styles.checkmark}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </label>
        )}

        <label>
          Sorted
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="default">by default</option>
            <option value="newest">Newest</option>
            <option value="price-high">Price: high to low</option>
            <option value="price-low">Price: low to high</option>
          </select>
        </label>
      </div>

      <ul className={styles.productsWrapper}>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <NavLink
              to={`/products/${product.id}`}
              className={styles.link}
              state={{ breadcrumb }}
              
            >
              <ProductCard product={product} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFilter;
