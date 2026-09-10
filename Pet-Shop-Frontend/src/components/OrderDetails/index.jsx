

import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../UserForm';
import styles from './OrderDetails.module.css';
import { fetchCreateOrder } from '../../redux/thunks/thunks';

function OrderDetails() {
  const cartList = useSelector((state) => state.cart.cartList);

  console.log('cartList:', cartList);
  const dispatch = useDispatch();

  const totalQuantity = cartList.reduce(
    (sum, product) => sum + Number(product.count),
    0,
  );

  const totalPrice = cartList.reduce((sum, item) => {
    const price = Number(item.product.discont_price ?? item.product.price);
    const count = Number(item.count);

    return sum + price * count;
  }, 0);

  const handleOrderSubmit = async (formData) => {
    const order = {
      ...formData,
      products: cartList,
      totalQuantity,
      totalPrice,
    };
    console.log('Order:', order);

    await dispatch(fetchCreateOrder(order)).unwrap();
  };

  return (
    <section className={styles.orderDetails}>
      <h2 className={styles.title}>Order details</h2>

      <div className={styles.info}>
        <div>
          <span>Quantity:</span>
          <span>{totalQuantity}</span>
        </div>

        <div>
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {cartList.length > 0 && (
        <UserForm
          onSubmit={handleOrderSubmit}
          buttonText="Order"
          submittingText="Ordered"
        />
      )}
    </section>
  );
}

export default OrderDetails;
