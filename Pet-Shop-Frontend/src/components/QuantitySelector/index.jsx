import styles from './QuantitySelector.module.css';

function QuantitySelector({ value, onChange }) {
  const handleDecrease = () => {
    onChange(Math.max(1, value - 1));
  };
  const handleIncrease = () => {
    onChange(value + 1);
  };
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };
  return (
    <div className={styles.blockWrapper}>
      <button className={styles.btn} onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        className={styles.count}
        name="count"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
export default QuantitySelector;
