import React from 'react';
import { Card, Form, Col, Row } from 'react-bootstrap';
import expStyle from '../style/experience.module.scss'

interface ExperienceProps {

}
// Styles
const divStyle = {
  margin: '10vh auto',
  heigth: 'auto'
};

const experiences = [{
    from: Date.parse('2019-09-01'),
    to:null,
    company:'E.B.S. Consulting s.r.l.',
    role:'Full-Stack dev',
    description:`Full-Stack developer : Devops ( Docker, CI, CD GitLab ), BackEnd ( Java EE/jakarta, hiberante, Struts2 ). Web ( Java jsp, HTML, CSS, javascript )`
  },{
    from: Date.parse('2015-07-01'),
    to:Date.parse('2019-08-31'),
    company:'Sanmarco Informatica SPA ',
    role:'Developer',
    description:`Analisi e sviluppo personalizzazioni software per ciascun cliente. Utilizzo linguaggio SQL/RPGILE su server IBM.
    Personalizzazioni lato client in linguaggio Java; installazione e gestione VM Windows e Linux per software integrativi al gestionale.
    Organizzazione lavoro tramite metodo Agile`
  }
];

const Experience:React.FC<ExperienceProps> = () => 
      <div id='Experience' style={divStyle}>
        <Card border={'warning'} className="text-center" id={'contacts'}>
          <Card.Header>
            <h1>
              <b> Esperienza Lavorativa </b>
            </h1>
          </Card.Header>
          <Card.Body>
            <Form>{
              experiences.map( e => (
                <>
                  <Form.Group as={Row} controlId="idDates">
                    <Form.Label className={expStyle.label } column sm={2}>Da - A</Form.Label>
                    <Col sm={10}>
                      <Form.Control plaintext readOnly defaultValue={e.to !=null ? `${e.from} - ${e.to} `:`${e.from} - Oggi`} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="idCompany">
                    <Form.Label className={expStyle.label } column sm={2}>Azienda</Form.Label>
                    <Col sm={10}>
                      <Form.Control plaintext readOnly defaultValue={e.company} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="idRole">
                    <Form.Label className={expStyle.label } column sm={2}>Ruolo</Form.Label>
                    <Col sm={10}>
                      <Form.Control plaintext readOnly defaultValue={e.role} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="idDescription">
                    <Form.Label className={expStyle.label } column sm={2}>Impiego</Form.Label>
                    <Col sm={10}>
                      <Form.Control as={'textarea'}plaintext readOnly defaultValue={e.description} />
                    </Col>
                  </Form.Group>


                  <hr />
                </>
              ))}
            </Form>
          </Card.Body>
        </Card>
      </div>

export default Experience;