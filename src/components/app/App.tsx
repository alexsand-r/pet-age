import { BlockContent } from "../blockContent/BlockContent";
import styles from "./App.module.css";

export const App = () => {
  return (
    <>
      <div className={styles.page}>
        <img src="background.png" alt="background" className={styles.bg} />
        <BlockContent />
      </div>
    </>
  );
};
