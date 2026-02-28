//..
import { useState } from "react";
import styles from "./BlockContent.module.css";
import { getCatHumanAge, getDogHumanAge } from "../../utils/petsCalculate";
//..
export const BlockContent = () => {
  const [value, setValue] = useState<string>(""); // - стан для значення інпута
  const [result, setResult] = useState<number | null>(null); // стан для результату
  const [hasError, setHasError] = useState(false); // стан для помилки
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleCatClick = () => {
    const trimmedValue: string = value.trim().replace(",", ".");
    const age: number = Number(trimmedValue);
    if (isNaN(age) || age < 0) {
      setHasError(true);
      return;
    }
    const result = getCatHumanAge(age);
    setResult(result);
  };

  const handleDogClick = () => {
    const trimmedValue: string = value.trim().replace(",", ".");
    const age: number = Number(trimmedValue);

    if (isNaN(age) || age < 0) {
      setHasError(true);
      return;
    }

    const result = getDogHumanAge(age);
    setResult(result);
  };

  const handleCleanValue = () => {
    setValue("");
    setResult(null);
    setHasError(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>pet age calculator</h1>
        <div className={`${styles.blockInput} ${value ? styles.hasValue : ""}`}>
          <input
            type="text"
            placeholder="Enter your pet's age ..."
            className={styles.input}
            value={value}
            onChange={handleValue}
          />
          <span className={styles.cross} onClick={handleCleanValue}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <p className={`${styles.error} ${hasError ? styles.errorAdd : ""}`}>
          Enter a valid value
        </p>
        {/*  */}
        <div className={styles.btns}>
          <button
            type="button"
            className={`${styles.btn} ${styles.cat}`}
            onClick={handleCatClick}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M12 21C16.4183 21 20 17.4183 20 13C20 12.5 19.9 11.5 19.5 10.5L21 4L14.5 5.5C13.7 5.2 12.9 5 12 5C11.1 5 10.3 5.2 9.5 5.5L3 4L4.5 10.5C4.1 11.5 4 12.5 4 13C4 17.4183 7.58172 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13H9.01M15 13H15.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16C11.5 16 11 15.5 11 15C11 14.5 11.5 14 12 14C12.5 14 13 14.5 13 15C13 15.5 12.5 16 12 16Z"
                  fill="currentColor"
                />
                <path
                  d="M10 18C10.5 18.5 11.2 19 12 19C12.8 19 13.5 18.5 14 18"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Calculate for Cat
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.dog}`}
            onClick={handleDogClick}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M12 19C15.866 19 19 15.866 19 12C19 11.2 18.8 10.5 18.5 9.8L19.5 5C19.5 5 16.5 5.5 15.5 6.5C14.5 6.2 13.3 6 12 6C10.7 6 9.5 6.2 8.5 6.5C7.5 5.5 4.5 5 4.5 5L5.5 9.8C5.2 10.5 5 11.2 5 12C5 15.866 8.13401 19 12 19Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 12C21 12 22 10 22 8C22 6 21 5 19 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12C3 12 2 10 2 8C2 6 3 5 5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11.5H9.01M15 11.5H15.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C11.5 15 11 14.5 11 14C11 13.5 11.5 13 12 13C12.5 13 13 13.5 13 14C13 14.5 12.5 15 12 15Z"
                  fill="currentColor"
                />
                <path
                  d="M10 16.5C10.5 17 11.2 17.5 12 17.5C12.8 17.5 13.5 17 14 16.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Calculate for Dog
          </button>
        </div>
        <div className={styles.blockResult}>
          <p className={styles.blockResultText}>In human yesrs, your pet is:</p>
          <p className={styles.blockResultYears}>
            {" "}
            <span>{result}</span> {result ? "years old" : ""}
          </p>
        </div>
      </div>
    </>
  );
};
