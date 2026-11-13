import React,{CSSProperties} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import {cardStyle} from './core/Constant';

// Props interface
interface HomeProps {}

const Contacts:React.FC<HomeProps> = () =>
    <Card border={'warning'} className={cardStyle} id={'Contacts'}>
        <Card.Header className="text-white">
          <h1><b>Contatti</b></h1>
        </Card.Header>
        <Card.Body className="text-white">
          <p><cite><strong>
            Trasformo idee incerte in prodotti che le persone possono usare: parto da una richiesta ancora astratta e la porto a un sistema concreto, seguendo tutto il filo. Dominio, architettura, backend, frontend e infrastruttura, senza perdere di vista il prodotto.
          </strong></cite></p>
          <p>If you have a problem that is still open, write to me.</p>
          <ListGroup variant="flush">
            <ListGroup.Item action href="https://www.paolocattani.me/" target="_blank" className="bg-transparent text-white">Sito: paolocattani.me</ListGroup.Item>
            <ListGroup.Item action href="https://www.paolocattani.me/cv/CV_Paolo_Cattani.pdf" target="_blank" className="bg-transparent text-white">Download CV</ListGroup.Item>
            <ListGroup.Item action href="https://www.linkedin.com/in/paolo-cattani" target="_blank" className="bg-transparent text-white">LinkedIn</ListGroup.Item>
            <ListGroup.Item action href="https://github.com/paolocattani" target="_blank" className="bg-transparent text-white">GitHub</ListGroup.Item>
            <ListGroup.Item action href="https://health.paolocattani.me/" target="_blank" className="bg-transparent text-white">Vital</ListGroup.Item>
            <ListGroup.Item action href="mailto:paolocattani0501@gmail.com" className="bg-transparent text-white">paolocattani0501@gmail.com</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

export default  Contacts;
