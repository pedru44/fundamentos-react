
'use client'
import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Numeros(){

    const [numero, setNumero] = useState(0);

    function aumentar() {
        setNumero(numero + 1);
    }

    function diminuir() {
        setNumero(numero - 1);
    }

    return (
        <Pagina titulo="Números">
            <Button onClick={aumentar} variant="outline-dark">+</Button>
            <h1>{numero}</h1>
            <Button onClick={diminuir} variant="outline-dark">_</Button>
            

        </Pagina>
    );
  }