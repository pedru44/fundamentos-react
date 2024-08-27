
'use client'
import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Nomes() {

    const [nome, setNome] = useState('Pedro')

    function alterarNome(){
        const novoNome = nome == 'Pedro' ? 'Pedro Henrique' : 'Pedro'
        setNome(novoNome)
    }

    return (
        <Pagina titulo={"Nomes: " + nome}>
            <h1>{nome}</h1>
            <Button onClick={alterarNome} variant="outline-dark"> Alterar Nome </Button>
        </Pagina>
    );
}