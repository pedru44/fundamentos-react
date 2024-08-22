import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";

export default function Fundamentos() {
  // todo componente precisa ser escrito com letra maiscula
  // o container cria um espaçamento na web 
  return (
    <>
      <Cabecalho />
      <Container>
        <Alert>Atenção !! preste atenção</Alert>

        <h1>Fundamentos</h1>
        <p>sucesso</p>

        <Cabecalho />
      </Container>
    </>
  );
}