'use client'
import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: ''},
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: ''},
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelho', foto: ''},
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: ''},
        {marca: 'GM', modelo: 'Cobalt', cor: 'Branco', foto: ''},
    ]


    return (
        <>
            {/*loop*/}
            <Pagina titulo="Objetos">
                {carros.map(item => (
                    <p>{item}</p>
                ))}

            </Pagina>

        </>

    );
}