import styles from "./TotalNFeList.module.css";
export default function ListaTotalNFe({ listaTotalNFe = [] }) {
  return (
    <section className={styles.Container}>
      <ItemTotalNFe
        isHeader
        total={"Valor total da nota"}
        numeroDaNota={"Codigo da nota"}
      />
      {listaTotalNFe.map((item, key) => {
        return (
          <ItemTotalNFe
            key={key}
            total={item.total}
            numeroDaNota={item.numeroDaNota}
          />
        );
      })}
    </section>
  );
}

function ItemTotalNFe({ numeroDaNota, total, isHeader = false }) {
  const fontSize = isHeader ? "1.2em" : "1em";
  return (
    <article
      className={styles.ItemContainer}
      style={{ fontSize: `${fontSize}` }}
    >
      <p>{numeroDaNota}</p>
      <p>R$ {total}</p>
    </article>
  );
}
