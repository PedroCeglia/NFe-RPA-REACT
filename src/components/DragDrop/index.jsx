import styles from "./DragDrop.module.css";
import { useRef } from "react";

export default function DragDrop({ files = [], setFiles = [], title = "" }) {
  const inputRef = useRef(null);

  /**
  Pega o novo documento e adiciona a listas de arquivos 
  a partir do Drag anf Drop
 */
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  /* Removendo Comporamento Padrao do evento */
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  /*
  Pega o novo documento e adiciona a lista
  a partir do botão
  */
  const handleInputChange = (event) => {
    event.preventDefault();
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  /* Removendo Arquivos */
  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div>
      {title != "" && <h2 className={styles.Titulo}>{title}</h2>}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={styles.Container}
      >
        <p>Arraste e solte arquivos aqui ou clique para selecionar</p>
        <input
          type="file"
          multiple
          ref={inputRef}
          onChange={handleInputChange}
          style={{ display: "none" }}
        />
        <button onClick={() => inputRef.current.click()}>
          Selecionar Arquivos
        </button>
      </div>
      <div className={styles.FilesList}>
        <h4>Arquivos Selecionados:</h4>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name}
              <button onClick={() => handleRemoveFile(file.name)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
