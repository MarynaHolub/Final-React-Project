import { useState } from 'react';
import styles from './RegFormDiscount.module.css';
import { useDispatch } from 'react-redux';
import { fetchAddUser } from '../../redux/thunks/thunks';
import registrDiscountImage from '../../assets/img/registrDiscountImage.png';
import { Modal, Box, Typography } from '@mui/material';

const initialErrors = {
  name: '',
  phone: '',
  email: '',
};

function RegFormDiscount() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const { name, phone, email } = formData;
  const [errors, setErrors] = useState(initialErrors);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputedName, setInputedName ] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)   

  const validate = () => {
    const newErrors = {
      ...initialErrors,
    };

    if (!name) {
      newErrors.name = 'Заполните поле Name формы';
    }

    if (!phone) {
      newErrors.phone = 'Заполните поле Phone number формы';
    }

    if (!email.trim()) {
      newErrors.email = 'Заполните поле емейл';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Некорректный емейл';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  // async нужен, потому что внутри используется await
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    try {
      setIsSubmitting(true)
      const result = await dispatch(
        fetchAddUser({ name, phone, email }),
      ).unwrap();
      console.log(result);

      setIsSubmitting(false)
      setInputedName(name)
      // Открываем modal после успешного запроса
      // Если убрать await, modal откроется сразу, не дожидаясь окончания имитации запроса.
      setIsModalOpen(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
      });
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  return (
    <div className={`${styles.container} ${styles.regFormDiscount}`}>
      <h3 className={styles.title}>5% off on the first order</h3>

      <div className={styles.flexWrapper}>
        <img src={registrDiscountImage} alt="pets" />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />

          {errors.name && <p>{errors.name}</p>}

          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone number"
            onChange={handleChange}
          />

          {errors.phone && <p>{errors.phone}</p>}

          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}

          <button type="submit" className={styles.button} style={{color: isSubmitting ? '#0d50ff' : '', background: isSubmitting ? '#fff' : '' }}>
            {isSubmitting ? <p>Request Submitted</p> : <p>Get a discount</p>}
           
          </button>
        </form>
      </div>

      {/* Поздравительный modal */}
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
