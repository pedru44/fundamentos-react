import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <Button variant="outline-primary">Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" subtitulo="Agora vai" />
      <Cabecalho titulo="Página Inicial" subtitulo="Sim" />

      <Link href='/fundamentos'> Paginas fundamentos</Link>


    </main>
  );
}