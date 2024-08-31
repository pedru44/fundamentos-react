'use client'
import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";

export default function DisneyCards() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Cards">
            <Container className="mt-3">
                <Row md={3}>
                    {personagens.map((item) => (
                        <Col key={item._id} className="mb-4">
                            <Card>
                                <Card.Img height={250} width="auto" src={item.imageUrl}  />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Pagina>
    );
}