import React from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface SkillProps {}

interface Skill {
  label : string,
  description?:string | JSX.Element
}


const formatSkill= (skills:Array<string>):JSX.Element  => (<p><code>{skills.join(' <|> ')}</code></p>);

const software:Array<Skill> = [
  {label:'Software'},
  {label:'FrontEnd', description: formatSkill(['HTML','CSS','SCSS','Javascript','Typescript','Reactjs'])},
  {label:'BackEnd', description: formatSkill(['Java EE/Jackarta','NodeJs','Maven','Struts2','Hibernate'])},
  {label:'Database', description:formatSkill(['IBM Db2','MS Sql Server','Oracle','Postgres','mysql','maria'])},
  {label:'Sql', description:formatSkill(['Sql','PL/SQL','T-SQL'])},
  {label:'Shell Script', description:formatSkill(['Batch ( Windows )','Bash ( Unix )'])},
];

const architecture:Array<Skill> =[
  {label:'Architettura'},
  {label:'Containerizzazione', description:<p>Docker</p>},
  {label:'Sistemi Operativi', description:<p>Windowx, Linux, WSL</p>}
]

const tools:Array<Skill> = [
  {label:'Tools'},
  {label:'Application Server',description:<p>Tomcat, Nginx, Jboss/Wildfly</p>},
  {label:'IDE', description:<p>Eclipse, MyEclipse, VsCode</p>},
  {label:'Client SSH', description:<p>Bitvise , Putty, MRemoteNG</p>},
  {label:'Sql Client', description:<p>Dbeaver , Squirrel, Sessione 5250 ( IBM )</p>},
  {label:'Utility', description:<p>WSL, Typora ( Markdown ), Keepass ( Password Store ), Ditto ( Store Copied Content ), BeefText ( Text Shortcut ), Notepad++, Atom</p>}
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

