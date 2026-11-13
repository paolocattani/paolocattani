import React from 'react';
import { Card } from 'react-bootstrap';
import {cardStyle} from './core/Constant';
import skillStyle from '../style/skill.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface SkillProps {}

interface Skill {
  label : string,
  description?:string | JSX.Element
}

const formatSkill= (skills:Array<string>):JSX.Element  => <p>{
  skills.map<React.ReactNode>(s=> (
        <code className={s.startsWith('<h>') ?  `${skillStyle.code} ${skillStyle.highlight}`: `${skillStyle.code}`}>
          {s.startsWith('<h>') ? s.substring(3):s}
        </code>
  )).reduce((prev, curr) => [prev, ' <|> ', curr])}</p>;

const aree:Array<Skill> = [
  {label:'Architettura', description: formatSkill(['Domain-driven design','System design','SOA','Event-driven','<h>TDD','BDD'])},
  {label:'Interfaccia', description: formatSkill(['<h>React','Redux','RTK Query','Redux Sagas','<h>TypeScript'])},
  {label:'Backend', description: formatSkill(['<h>NestJS','Node.js','gRPC','HTTP','GraphQL','RabbitMQ','Java'])},
  {label:'Infrastruttura', description: formatSkill(['Kubernetes','<h>AWS','Docker','GitLab CI/CD','Jenkins','Ansible'])},
];

const strumenti:Array<Skill> = [
  {label:'Strumenti'},
  {label:'IDE', description:formatSkill(['VsCode'])},
  {label:'Sql Client', description:formatSkill(['<h>Dbeaver'])},
  {label:'Utility', description:formatSkill(['WSL','Typora','Keepass','<h>Ditto','BeefText'])},
  {label:'Sistemi Operativi', description:formatSkill(['<h>Linux','WSL','Windows'])},
];

const Skill:React.FC<SkillProps> = () =>
  <Card border={'warning'} className={cardStyle} id={'Skill'}>
    <Card.Header className={'text-white'}>
      <h1><b> Competenze tecniche  </b></h1>
    </Card.Header>
    <Card.Body>
      { aree.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
      <hr />
      { strumenti.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
    </Card.Body>
  </Card>;

export default Skill;
