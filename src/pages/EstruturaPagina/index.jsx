import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import NFeProvider from "../../contexts/NFe";

import "../../styles.css";

export default function EstruturaPagina() {
  return (
    <div className={styles.Container}>
      <Header />
      <Outlet />
    </div>
  );
}
