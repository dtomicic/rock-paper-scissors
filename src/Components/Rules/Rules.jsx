import styles from "./Rules.module.css";

const Rules = ({ rulesOpen, setRulesOpen }) => {
  return (
    <div
      className={
        rulesOpen ? `${styles.backdrop} ${styles.open}` : `${styles.backdrop}`
      }
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Rules</h1>
          <img
            className={styles.close}
            src="/images/icon-close.svg"
            alt="close"
            onClick={() => setRulesOpen(!rulesOpen)}
          />
        </div>
        <img
          className={styles.rulesImage}
          src="/images/image-rules.svg"
          alt="rules"
        />
      </div>
    </div>
  );
};
export default Rules;
