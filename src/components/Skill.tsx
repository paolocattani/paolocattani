import React from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
import skillStyle from '../style/skill.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface SkillProps {}

interface Skill {
  label : string,
  description?:string | JSX.Element
}

 
const formatSkill= (skills:Array<string>):JSX.Element  => <p>{
  skills.map<React.ReactNode>(s=> (
        <code className={s.startsWith('<h>') ?  `${skillStyle.code} ${skillStyle.highlight}`: `${skillStyle.code}`}>{
          s.startsWith('<h>') ? s.substring(3):s}
        </code>
  )).reduce((prev, curr) => [prev, ' <|> ', curr])}</p>;

const software:Array<Skill> = [
  {label:'Software'},
  {label:'FrontEnd', description: formatSkill(['HTML','CSS','SCSS','Javascript','<h>Typescript','<h>Reactjs'])},
  {label:'BackEnd', description: formatSkill(['<h>Java EE/Jackarta','NodeJs','Maven','Struts2','Hibernate'])},
  {label:'Database', description:formatSkill(['IBM Db2','MS Sql Server','Oracle','Postgres','mysql','maria'])},
  {label:'Sql', description:formatSkill(['Sql','<h>PL/SQL','T-SQL'])},
  {label:'Pattern', description:formatSkill(['SOA','MVC','DDD'])},
  {label:'Shell Script', description:formatSkill(['Batch ( Windows )','Bash ( Unix )'])},
  {label:'Altro', description:formatSkill(['Markdown'])}, 
];

const architecture:Array<Skill> =[
  {label:'Architettura'},
  {label:'Containerizzazione', description: formatSkill(['Docker'])},
  {label:'Sistemi Operativi', description:formatSkill(['Windowx','<h>Linux','WSL'])},
]

const tools:Array<Skill> = [
  {label:'Tools'},
  {label:'Application Server',description:formatSkill(['Tomcat','Nginx','<h>Jboss/Wildfly'])},
  {label:'IDE', description:formatSkill(['Eclipse','MyEclipse','VsCode'])},
  {label:'Client SSH', description:formatSkill(['Bitvise ','Putty','MRemoteNG'])},
  {label:'Sql Client', description:formatSkill(['<h>Dbeaver ','Squirrel','Sessione 5250 ( IBM )'])},
  {label:'Utility', description:formatSkill(['WSL','Typora','Keepass','<h>Ditto','BeefText','Notepad++','Atom'])},
];

const Skill:React.FC<SkillProps> = () =>
  <Card border={'warning'} className={`text-center my-4 mx-auto ${commonStyle.darkBackground}`} id={'Skill'}>
    <Card.Header className={'text-white'}>
      <h1><b> Competenze tecniche  </b></h1>
    </Card.Header>
    <Card.Body>
      { software.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
      <hr />
      { architecture.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
      <hr />
      { tools.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
    </Card.Body>
  </Card>;

export default Skill;

