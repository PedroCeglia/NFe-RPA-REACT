import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Rotas from "./Rotas";
import NFeProvider from "./contexts/NFe";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NFeProvider>
      <Rotas />
    </NFeProvider>
  </StrictMode>
);
