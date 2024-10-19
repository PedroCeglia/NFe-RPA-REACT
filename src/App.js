import Header from "./components/Header";
import Main from "./pages/Main";
import NFeProvider from "./contexts/NFe";

import "./styles.css";

export default function App() {
  return (
    <NFeProvider>
      <Header />
      <Main />
    </NFeProvider>
  );
}
