
import { useState } from 'react';
import styles from './UserForm.module.css';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
};

const initialErrors = {
  name: '',
  phone: '',
  email: '',
};

function UserForm({
  onSubmit,
  buttonText = 'Submit',
  submittingText = 'Request Submitted',
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, phone, email } = formData;

  const validate = () => {
    const newErrors = { ...initialErrors };

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    try {
      setIsSubmitting(true);

      await onSubmit(formData);

      setFormData(initialFormData);
    } catch (error) {
      console.log('Ошибка:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={
        Object.values(errors).some(Boolean)
          ? styles.formWithErrors
          : styles.form
      }
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleChange}
      />

      {errors.name && <p className={styles.error}>{errors.name}</p>}

      <input
        className={styles.input}
        type="tel"
        name="phone"
        value={phone}
        placeholder="Phone number"
        onChange={handleChange}
      />

      {errors.phone && <p className={styles.error}>{errors.phone}</p>}

      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />

      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <button
        type="submit"
        className={styles.button}
        style={{
          color: isSubmitting ? '#0d50ff' : '',
          background: isSubmitting ? '#fff' : '',
        }}
      >
        {isSubmitting ? <p>{submittingText}</p> : <p>{buttonText}</p>}
      </button>
    </form>
  );
}

export default UserForm;

