import styles from "./ErrosInfo.module.css";
import ErroItem from "../ErrosItem";

import { useNFeContext } from "../../contexts/NFe";

export default function ErrosInfo() {
  const { listaErrosNFe, listaItensDuplicados } = useNFeContext();

  const listaErrosNFeFinal = [];
  listaErrosNFe.forEach((nfe_list) => {
    nfe_list.forEach((item) => {
      const { numeroDaNota, Cod, ITEM } = item;
      listaErrosNFeFinal.push({
        numeroDaNota: numeroDaNota,
        codigoProduto: Cod,
        descricaoProduto: ITEM,
      });
    });
  });

  const listaItensDuplicadosFinal = listaItensDuplicados.map((item) => {
    const { Cod, PRODUTOS } = item;
    return {
      numeroDaNota: "--",
      codigoProduto: Cod,
      descricaoProduto: PRODUTOS,
    };
  });

  const notFoundItem = {
    title: (itens) => `Não encontrou ${itens} produto`,
    imageSrc: "https://cdn-icons-png.flaticon.com/512/1304/1304037.png",
    errosList: [
      {
        numeroDaNota: "Código da Nota",
        codigoProduto: "Código do Produto",
        descricaoProduto: "Descrição do Produto",
      },
      ...listaErrosNFeFinal,
    ],
  };

  const duplicateItem = {
    title: (itens) => `${itens} Itens Duplicados`,
    imageSrc: "https://cdn-icons-png.flaticon.com/512/6627/6627429.png",
    errosList: [
      {
        numeroDaNota: "Código da Nota",
        codigoProduto: "Código do Produto",
        descricaoProduto: "Descrição do Produto",
      },
      ...listaItensDuplicadosFinal,
    ],
  };
  console.log(listaErrosNFeFinal.length);
  console.log(listaItensDuplicadosFinal.length);

  const styleContainer =
    listaErrosNFeFinal.length == 0 && listaItensDuplicadosFinal.length == 0
      ? styles.HiddenContainer
      : styles.Container;

  return (
    <section className={styleContainer}>
      {notFoundItem.errosList.length > 0 && (
        <ErroItem
          title={notFoundItem.title}
          srcImage={notFoundItem.imageSrc}
          errorItemList={notFoundItem.errosList}
        />
      )}

      {duplicateItem.errosList.length > 0 && (
        <ErroItem
          title={duplicateItem.title}
          srcImage={duplicateItem.imageSrc}
          errorItemList={duplicateItem.errosList}
        />
      )}
    </section>
  );
}
