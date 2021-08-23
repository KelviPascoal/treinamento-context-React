import { useCanal } from "../../context/Canal";
import { Container } from "./styles";

export function Tela() {
  const {canal} = useCanal()


  return (
    <Container>
      <strong>canal {canal}</strong>
    </Container>
  );
}
