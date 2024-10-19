import styles from "./styles.module.css";
export default function Loading() {
  return (
    <section className={styles.Container}>
      <div className={styles.Spiner}></div>
      <div className={styles.Spiner}></div>
      <div className={styles.Spiner}></div>
      <div className={styles.Spiner}></div>
      <h2>Carregando...</h2>
    </section>
  );
}
