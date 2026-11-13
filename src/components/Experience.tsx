import React from 'react';
import { Card } from 'react-bootstrap';
import {cardStyle} from './core/Constant';
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
    from: 'Novembre 2023',
    to:null,
    company:'GTN SPA (Udine)',
    role:'Technical Director',
    description:<p>Realizzo la soluzione ERP per la grande distribuzione alimentare e ho costruito il team di sviluppo da zero.<br/>
    SOA su Kubernetes, NestJS, gRPC, HTTP, RabbitMQ, React, Redux, RTK, RTK Query, AWS</p>
  },{
    from: 'Aprile 2020',
    to: 'Novembre 2023',
    company:'Tecma Solutions SPA (Milano)',
    role:'Tech Lead',
    description:<p>Ho coordinato 3 team di sviluppo, 1 team QA e 1 team di infrastruttura, garantendo standard di qualita elevati sulla piattaforma SaaS aziendale.<br/>
    Microservizi su Kubernetes, GitLab CI/CD, Node.js, GraphQL, NestJS, React, Redux, TDD, BDD, DDD</p>
  },{
    from: 'Settembre 2019',
    to: 'Aprile 2020',
    company:'EBS Consulting (Padova)',
    role:'Software Engineer',
    description:<p>Piattaforma enterprise per colonnine di ricarica. Sistema di pagamento distribuito con job asincroni su Quartz e SQL.<br/>
    Java EE, JBoss, Quarkus</p>
  },{
    from: 'Giugno 2015',
    to: 'Agosto 2019',
    company:'Sanmarco Informatica (Padova)',
    role:'Software Developer & Consultant',
    description:<p>Soluzioni specializzate per i clienti sulla piattaforma ERP aziendale. Integrazione con magazzino semi-autonomo dal ricevimento alla consegna.<br/>
    Servizi SOAP, picking e packing</p>
  }
];

const Experience:React.FC<ExperienceProps> = () =>
        <Card border={'warning'} className={cardStyle} id={'Experience'}>
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
              ))
            }
          </Card.Body>
        </Card>;

export default Experience;
