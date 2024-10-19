export const realizar_requisicao = async (
  pdfFiles,
  sheetFiles,
  setListaItensNFe,
  setListaTotalNFe,
  setListaErrosNFe,
  setListaItensDuplicados,
  setIsLoading,
  redirectTo
) => {
  setIsLoading(true);

  const formData = new FormData();

  pdfFiles.forEach((file) => {
    formData.append("pdfs", file);
  });

  sheetFiles.forEach((file) => {
    formData.append("csv", file);
  });
  const urlBase = "http://3.86.64.115:5000";
  //const urlBase = "http://localhost:5000";
  //const urlBase = "https://nfe-api-rpa-dev-ceglia.vercel.app"

  try {
    const response = await fetch(`${urlBase}/processar_arquivos`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      setIsLoading(false);
      throw new Error(errorMessage || "Erro ao enviar arquivos");
    }

    const result_json = await response.json();

    const {
      planilha_itens_nao_encontrados,
      planilha_itens_nfe,
      planilha_total_itens,
      planilha_duplicados,
    } = result_json;

    const dict_planilhas_itens_nao_encontrados = transformar_objeto_em_lista(
      planilha_itens_nao_encontrados
    ); //.map(({ id, valor }) => [id, transformarJsonEmObjeto(valor)]);

    const dict_planilhas_itens_nfe =
      transformar_objeto_em_lista(planilha_itens_nfe);
    //.map(({ id, valor }) => [id, transformarJsonEmObjeto(valor)]);

    const dict_planilha_total_itens =
      transformarJsonEmObjeto(planilha_total_itens);

    const planilha_final_duplicados =
      transformarJsonEmObjeto(planilha_duplicados);

    const result = {
      planilhas_nao_encontrados: dict_planilhas_itens_nao_encontrados,
      planilhas_itens_nfe: dict_planilhas_itens_nfe,
      planilha_total_itens: dict_planilha_total_itens,
      planilhas_duplicadas: planilha_final_duplicados,
    };

    setListaItensNFe(dict_planilhas_itens_nfe);
    setListaTotalNFe(dict_planilha_total_itens);
    setListaErrosNFe(dict_planilhas_itens_nao_encontrados);

    setListaItensDuplicados(planilha_final_duplicados);

    setIsLoading(false);
    redirectTo("/result");

    //console.log("Upload bem-sucedido:", result);
    // Aqui você pode lidar com o resultado da resposta
  } catch (error) {
    console.error("Erro:", error);
    setIsLoading(false);
  }
};

function transformar_objeto_em_lista(objeto) {
  const lista = Object.entries(objeto).map(([id, valor]) => {
    const nfeLista = transformarJsonEmObjeto(valor);
    return nfeLista.map((item, idx) => {
      return {
        numeroDaNota: id,
        ...item,
      };
    });
  });
  return lista;
}

function transformarJsonEmObjeto(jsonText) {
  return JSON.parse(jsonText);
}
