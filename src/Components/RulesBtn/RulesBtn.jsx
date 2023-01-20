import styles from "./RulesBtn.module.css";

const RulesBtn = ({ rulesOpen, setRulesOpen }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setRulesOpen(!rulesOpen)}
      >
        Rules
      </button>
    </div>
  );
};
export default RulesBtn;
