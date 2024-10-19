import styles from "./styles.module.css";
import DragDrop from "../../components/DragDrop";
import { useNFeContext } from "../../contexts/NFe";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {
    pdfFiles,
    setPdfFiles,
    sheetFiles,
    setSheetFiles,
    recuperarDadosNFe,
    isLoading,
  } = useNFeContext();

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  const redirectTo = (link) => {
    navigate(link);
  };

  return (
    <main className={styles.Container}>
      <section className={styles.DragDropContainer}>
        <DragDrop title="PDFs" files={pdfFiles} setFiles={setPdfFiles} />
        <DragDrop
          title="Planilhas"
          files={sheetFiles}
          setFiles={setSheetFiles}
        />
      </section>
      <button
        className={styles.ButtonEnviar}
        onClick={() => {
          recuperarDadosNFe(redirectTo);
        }}
      >
        Enviar
      </button>
    </main>
  );
}
