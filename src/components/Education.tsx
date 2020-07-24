import React from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface EducationProps {}

interface Education {
  from :string,
  to:string | null,
  institute:string,
  qualification?:string,
  description:string | JSX.Element
}

const education:Array<Education> = [{
    from: 'Ottobre 2010',
    to: 'Sospeso',
    institute:'Università degli Studi di Padova – Ingegneria Informatica',
    description:<p>Java, architettura degli elaboratori, matematica discreta e probabilità, analisi matematica, algebra lineare e geometria, fisica, elettrotecnica.</p>
  },{
    from: 'Settembre 2004',
    to: 'Luglio 2010',
    institute:'ITIS A.Meucci – Elettronica e Telecomunicazioni',
    qualification:'Perito in Elettronica e Telecomunicazioni (78/100)',
    description:<p>Telecomunicazioni generali (antenne, linee, sistemi digitali, codifiche, PCM, trasmissioni terrestri e satellitari), 
      elettronica, sistemi automatici, disegno e realizzazione di schemi elettronici (PCB), programmazione C++ e Assembly</p>
  }
];

const Education:React.FC<EducationProps> = () =>
  <Card border={'warning'} className={`text-center my-4 mx-auto ${commonStyle.darkBackground}`} id={'Education'}>
    <Card.Header className={'text-white'}>
      <h1>
        <b> Istruzione e Formazione </b>
      </h1>
    </Card.Header>
    <Card.Body>
      {
        education.map( e => (
          <>
            <DescriptionRow label="Da - A"  translate={false} description={e.to !=null ? `${e.from} - ${e.to} `:`${e.from} - Oggi` }/>
            <DescriptionRow label="Istituto" translate={false} description={e.institute}/>
            { e.qualification ?  <DescriptionRow label="Qualifica"   translate={false} description={e.qualification}/> : null}
            <DescriptionRow label="Argomenti di studio" translate={false} description={e.description}/>
          </>
        ))}
    </Card.Body>
  </Card>;

export default Education;