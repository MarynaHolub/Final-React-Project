import { API_URL } from '../../constants/api';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../redux/thunks/thunks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductPage() {
  const { id } = useParams(); // useParams() достаёт значения динамических параметров из адресной строки
//   console.log(id);

const { productsList, status, error } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if(productsList.length === 0){
    dispatch(fetchProducts());
    }
  }, [dispatch, productsList.length]);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка: {error}</p>;
  }

  const product = productsList.find((product) => product.id === Number(id))
  
//   console.log(product);

  if (!product) {
    return <p>Такой товар не найден</p>;
  }

  return (
    <div>
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
          {/* <p>-{discount}%</p> */}
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
          {/* <button type="button">Read more</button> */}
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
