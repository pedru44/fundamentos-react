'use client'
import Pagina from "../components/Pagina";

export default function Array() {

    const carros = ["Corsa","Celta","Ferrari","Fusca","Cobalt",]
    const pessoas = ["Maysa","Pedro","Marta","Carlos","Edna",]

    return (
        <>
        {/*loop*/ }
        <Pagina titulo="Página de Array">
               {carros.map(item => (
                    <p>{item}</p>
                ))}
                  {pessoas.map(item => (
                       <p>{item}</p>
                   ))}

            <ul>
            {carros.map(item => (
                <li>{item}</li>
            ))}
            </ul>

        </Pagina>

        </>
        
    );
}