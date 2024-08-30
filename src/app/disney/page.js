'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";


export default function Disney(){
    const [personagens, setPersonagens] = useState([])
    useEffect(()=>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
        })
    }, [])
    
    return (
        <Pagina titulo="Disney">
            {personagens.map(item => (
                <p>{item.name}</p>
            ))}

        </Pagina>
    )
}