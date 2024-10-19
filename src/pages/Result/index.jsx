import styles from "./styles.module.css";
import ListaTotalNFe from "../../components/ListaTotalNFe";
import ErrosInfo from "../../components/ErrosInfo";
import { useNFeContext } from "../../contexts/NFe";

export default function Result() {
  const { listaTotalNFe } = useNFeContext();

  return (
    <main className={styles.Container}>
      <ErrosInfo />
      <ListaTotalNFe listaTotalNFe={listaTotalNFe} />
    </main>
  );
}
