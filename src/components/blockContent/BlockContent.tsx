//..
import styles from "./BlockContent.module.css";
//..
export const BlockContent = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>pet age calculator</h1>
        <input
          type="number"
          placeholder="Enter your pet's age ..."
          className={styles.input}
        />
        <div className={styles.btns}>
          <button type="button" className={`${styles.btn} ${styles.cat}`}>
            Calculate for Cat
          </button>
          <button type="button" className={`${styles.btn} ${styles.dog}`}>
            Calculate for Dog
          </button>
        </div>
        {/* тут будуть кнопки */}
      </div>
    </>
  );
};
