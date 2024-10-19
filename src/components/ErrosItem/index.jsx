import styles from "./ErrosItem.module.css";
import { useState } from "react";

export default function ErroItem({ title, srcImage, errorItemList = [] }) {
  const [errorIsOpen, setErrorIsOpen] = useState(false);
  const arrowStyle = errorIsOpen
    ? styles.ButtonSetaActive
    : styles.ButtonSetaDesactive;

  const handleErrorIsOpen = () => {
    setErrorIsOpen((isOpen) => !isOpen);
  };
  const styleError =
    errorItemList.length == 1 ? styles.HiddenContainer : styles.Container;
  return (
    <article className={styleError}>
      <div className={styles.Title}>
        <img src={srcImage} />
        <h2>{title(errorItemList.length - 1)}</h2>
      </div>
      <button className={arrowStyle} onClick={handleErrorIsOpen}>
        <img src="https://cdn-icons-png.flaticon.com/512/724/724927.png" />
      </button>
      {errorIsOpen && (
        <div className={styles.ItemList}>
          {errorItemList.map((item, key) => {
            const { numeroDaNota, codigoProduto, descricaoProduto } = item;
            const descricaoProdutoFilter =
              descricaoProduto.length > 20
                ? descricaoProduto.substr(0, 20) + "..."
                : descricaoProduto;
            return (
              <div key={key} className={styles.SubItem}>
                <p>{numeroDaNota}</p>
                <p>{codigoProduto}</p>
                <p>{descricaoProduto}</p>
                <p>{descricaoProdutoFilter}</p>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
