"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function DisneyTabelas() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Tabelas">
             
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {personagens.map((item) => (
          <tr key={item.id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td><img height={45} src={item.imageUrl} /></td>
          </tr>
        ))}
      </tbody>
    </Table>

    </Pagina>
  );
}