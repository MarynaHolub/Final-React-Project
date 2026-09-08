import { useState } from 'react';
import styles from './RegFormDiscount.module.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/usersForDiscountSlice';
import registrDiscountImage from '../../assets/img/registrDiscountImage.png';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }
    dispatch(addUser({ name, phone, email }));

    setFormData({
      name: '',
      phone: '',
      email: '',
    });
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
          {errors.name && <p>{errors.phone}</p>}
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.name && <p>{errors.email}</p>}
          <button type="submit" className={styles.button}>
            Get a discount
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegFormDiscount;
