import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import UserForm from '../UserForm';
import styles from './OrderDetails.module.css';
import { fetchCreateOrder } from '../../redux/thunks/thunks';
import { Modal, Box, Typography } from '@mui/material';

function OrderDetails() {
  const cartList = useSelector((state) => state.cart.cartList);


  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputedName, setInputedName] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

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
  

    await dispatch(fetchCreateOrder(order)).unwrap();

    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsOrderPlaced(false);
    }, 3000);

    setInputedName(formData.name);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.orderDetails}>
      <h2 className={styles.title}>Order details</h2>

      <div className={styles.info}>
        <span className={styles.total}>{totalQuantity} items</span>

        <div className={styles.flex}>
          <span className={styles.total}>Total</span>
          <span className={styles.totalPrice}>
            ${totalPrice.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      {cartList.length > 0 && (
        <UserForm
          onSubmit={handleOrderSubmit}
          buttonText={isOrderPlaced ? 'The Order is Placed' : 'Order'}
          submittingText="Order..."
          className={styles.orderForm}
          inputClassName={styles.inputOrder}
          buttonClassName={
            isOrderPlaced
              ? `${styles.buttonOrder} ${styles.orderPlaced}`
              : styles.buttonOrder
          }
        />
      )}

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 548,
            bgcolor: '#0d50ff',
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              width: 424,
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: 40,
              color: '#fff',
            }}
          >
            Congratulations! {inputedName}
          </Typography>

          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              top: 0,
              right: '32px',
              border: 'none',
              background: 'transparent',
              color: '#fff',
              fontSize: '90px',
              fontFamily: 'Montserrat',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            ×
          </button>

          <Typography
            sx={{
              width: 424,
              mt: 2,
              fontFamily: 'Montserrat',
              color: '#fff',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Your order has been successfully placed on the website.
          </Typography>

          <Typography
            sx={{
              width: 424,
              mt: 2,
              fontFamily: 'Montserrat',
              color: '#fff',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            A manager will contact you shortly to confirm your order.
          </Typography>
        </Box>
      </Modal>
    </section>
  );
}

export default OrderDetails;
