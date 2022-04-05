import "./Private.css";
import styles from "./Private.module.css";

console.log(styles);

const Private = () => {
  return (
    <div>
      <h1>Szia, User!</h1>
      <div className={styles.keretes}>Formázott tartalom</div>
      <button className="logoutBtn">Kijelentkezés</button>
    </div>
  );
};

export default Private;
