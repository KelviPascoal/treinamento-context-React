import { Button } from "../Button";
import { Container} from './styles'

interface IControle {
  listaCanais: number[];
}

export function Controle({listaCanais}: IControle) {


  return (
    <Container>
      <strong>Controle</strong>
      {listaCanais.map((canalBotao) => <Button canalBotao={canalBotao} key={canalBotao} />)}
    </Container>
  );
}
