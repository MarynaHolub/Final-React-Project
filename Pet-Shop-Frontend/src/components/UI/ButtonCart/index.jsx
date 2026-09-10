import styles from './ButtonCart.module.css';

function ButtonCart({
  children,
  onClick,
  type = 'button',
  className = '',
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonCart;
