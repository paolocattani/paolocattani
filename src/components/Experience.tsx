import React from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface ExperienceProps {}

interface Experience {
  from :string,
  to:string | null,
  company:string,
  role:string,
  description:string | JSX.Element
}

const experiences:Array<Experience> = [{
    from: 'Settembre 2019',
    to:null,
    company:'E.B.S. Consulting s.r.l.',
    role:'Full-Stack dev',
    description:<p>Full-Stack developer : Devops ( Docker, CI, CD GitLab ), BackEnd ( Java EE/jakarta, hiberante, Struts2 ).<br/>
    Web ( Java jsp, HTML, CSS, javascript )</p>
  },{
    from: 'Luglio 2015',
    to: 'Agosto 2019',
    company:'Sanmarco Informatica SPA ',
    role:'Developer',
    description:<p>Analisi e sviluppo personalizzazioni software per ciascun cliente. Utilizzo linguaggio SQL/RPGILE su server IBM.
    Personalizzazioni lato client in linguaggio Java; installazione e gestione VM Windows e Linux per software integrativi al gestionale.
    Organizzazione lavoro tramite metodo Agile</p>
  }
];

const Experience:React.FC<ExperienceProps> = () =>
        <Card border={'warning'} className={`text-center ${commonStyle.darkBackground}`} id={'Experience'}>
          <Card.Header className={'text-white'}>
            <h1>
              <b> Esperienza Lavorativa </b>
            </h1>
          </Card.Header>
          <Card.Body>
            {
              experiences.map( e => (
                <>
                  <DescriptionRow label="Da - A"  translate={false} description={e.to !=null ? `${e.from} - ${e.to} `:`${e.from} - Oggi` }/>
                  <DescriptionRow label="Azienda" translate={false} description={e.company}/>
                  <DescriptionRow label="Ruolo"   translate={false} description={e.role}/>
                  <DescriptionRow label="Impiego" translate={false} description={e.description}/>
                </>
              ))}
          </Card.Body>
        </Card>;

export default Experience;