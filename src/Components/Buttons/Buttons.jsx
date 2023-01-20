import styles from "./Buttons.module.css";

const Buttons = ({ setUserChoice, getComputerChoice }) => {

  const handleClick = (x) => {
    setUserChoice(x);
    getComputerChoice();
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.outerCircle} ${styles.blue}`} onClick={() => handleClick('paper')}>
        <div className={styles.innerCircle}>
          <img src="/images/icon-paper.svg" alt="paper" />
        </div>
      </div>
      <div className={`${styles.outerCircle} ${styles.yellow}`} onClick={() => handleClick("scissors")}>
        <div className={styles.innerCircle}>
          <img src="/images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>
      <div className={`${styles.outerCircle} ${styles.red}`} onClick={() => handleClick("rock")}>
        <div className={styles.innerCircle}>
          <img src="/images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </div>
  );
};
export default Buttons;
