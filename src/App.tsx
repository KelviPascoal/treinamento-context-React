import { Controle } from "./components/Controle";
import { Tela } from "./components/Tela";
import { CanalProvider, useCanal } from "./context/Canal";

function App() {
  const { canal } = useCanal()

  const canaisLista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(canal);
  
  return (
    <CanalProvider>
      <Tela />
      <Controle listaCanais={canaisLista}/>
    </CanalProvider>
  );
}

export default App;
