import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { useCanal } from '../../context/Canal'


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  canalBotao: number
}

export function Button({canalBotao}: IButton) {
  const {canal, setCanal} = useCanal()
  
  return <Container onClick={() => setCanal(canalBotao)}>{canalBotao}</Container>;
}