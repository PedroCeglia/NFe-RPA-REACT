import { createContext, useContext, useState } from "react";
import { realizar_requisicao } from "../../api/NFe";

// Criando o Contexto
const NFeContext = createContext();

export default function NFeProvider({ children }) {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [sheetFiles, setSheetFiles] = useState([]);

  const [listaItensNFe, setListaItensNFe] = useState([]);
  const [listaErrosNFe, setListaErrosNFe] = useState([]);
  const [listaTotalNFe, setListaTotalNFe] = useState([]);
  const [listaItensDuplicados, setListaItensDuplicados] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const recuperarDadosNFe = (redirectTo) => {
    realizar_requisicao(
      pdfFiles,
      sheetFiles,
      setListaItensNFe,
      setListaTotalNFe,
      setListaErrosNFe,
      setListaItensDuplicados,
      setIsLoading,
      redirectTo
    );
  };

  return (
    <NFeContext.Provider
      value={{
        setPdfFiles,
        setSheetFiles,
        recuperarDadosNFe,
        pdfFiles,
        sheetFiles,
        listaItensNFe,
        listaErrosNFe,
        listaTotalNFe,
        listaItensDuplicados,
        isLoading,
      }}
    >
      {children}
    </NFeContext.Provider>
  );
}

// Hook para usar o contexto
export const useNFeContext = () => {
  return useContext(NFeContext);
};
