import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to="/" className={styles.Logo}>
          NFe Faturamento
        </Link>
      </h1>
    </header>
  );
}
