import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/images/logo.svg" alt="logo" />
      </div>
      <div className={styles.scoreBox}>
        <p className={styles.scoreText}>Score</p>
        <p className={styles.score}>0</p>
      </div>
    </div>
  );
};
export default Header;
