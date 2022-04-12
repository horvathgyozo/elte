import "./Private.css";
import styles from "./Private.module.css";

console.log(styles);

const Private = ({ logout, username }) => {
  return (
    <div>
      <h1>Szia, {username}!</h1>
      <div className={styles.keretes}>Formázott tartalom</div>
      <button onClick={logout} className="logoutBtn">
        Kijelentkezés
      </button>
    </div>
  );
};

export default Private;
