import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { ColorModeProvider } from "./colorMode.context";
import Login from "./pages/login";

function App() {
  const isLogged = localStorage.getItem("usuario");
  return (
    <ColorModeProvider>
      <>
        <Header />
      </>
    </ColorModeProvider>
  );
}

export default App;
