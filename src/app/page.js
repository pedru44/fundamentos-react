import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Página Inicial">

      <Button variant="outline-primary">Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" subtitulo="Agora vai" />
      <Cabecalho titulo="Página Inicial" subtitulo="Sim" />

      <Link href='/fundamentos'> Páginas de Fundamentos</Link> <br/>
      <Link href='/clientes'> Páginas de Clientes</Link>


    </Pagina>
  );
}