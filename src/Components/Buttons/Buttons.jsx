import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.outerCircleBlue}>
        <div className={styles.innerCircleBlue}>
            <img src="/images/icon-paper.svg" alt="paper" />
        </div>
      </div>
      <div className={styles.outerCircleYellow}>
        <div className={styles.innerCircleYellow}>
            <img src="/images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>
      <div className={styles.outerCircleRed}>
        <div className={styles.innerCircleRed}>
            <img src="/images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </div>
  );
};
export default Buttons;
