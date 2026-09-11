import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography } from '@mui/material';

import { fetchAddUser } from '../../redux/thunks/thunks';
import UserForm from '../UserForm';

import regDiscountImage from '../../assets/img/registrDiscountImage.png';
import styles from './RegFormDiscount.module.css';

function RegFormDiscount() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputedName, setInputedName] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      setError('');
      await dispatch(fetchAddUser(formData)).unwrap();
      setInputedName(formData.name);
      setIsModalOpen(true);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`${styles.container} ${styles.regFormDiscount}`}>
      <h3 className={styles.title}>5% off on the first order</h3>

      <div className={styles.flexWrapper}>
        <img className={styles.img} src={regDiscountImage} alt="pets" />
        
        {error && <p className={styles.error}>{error}</p>}
        <UserForm
          onSubmit={handleSubmit}
          buttonText="Get a discount"
          submittingText="Request Submitted"
        />
      </div>

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
              mt: 2,
              fontFamily: 'Montserrat',
              color: '#fff',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            You have successfully registered and received a 5% discount!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default RegFormDiscount;
