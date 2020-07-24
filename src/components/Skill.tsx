import React from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
import DescriptionRow from './core/DescriptionRow';

interface SkillProps {}

interface Skill {
  label : string,
  description:string | JSX.Element
}

const skill:Array<Skill> = [
  {label:'FrontEnd', description:<p>HTML,CSS,SCSS, Javascript, Typescript, Reactjs</p>},
  {label:'BackEnd', description:<p>Java EE/Jackarta , NodeJs, Maven, Struts2, Hibernate</p>},
  {label:'Sql', description:<p>Db2 , MS Sql, </p>},
  {label:'Shell Script', description:<p>Batch ( Windows ), Bash ( Unix ) </p>},
  {label:'Containerizzazione', description:<p>Docker</p>},
  {label:'Application Server',description:<p>Tomcat, Nginx, Jboss/Wildfly</p>},
  {label:'IDE', description:<p>Eclipse, MyEclipse, VsCode</p>},
  {label:'Client SSH', description:<p>Bitvise , Putty, MRemoteNG</p>},
  {label:'Sql Client', description:<p>Dbeaver , Squirrel, Sessione 5250 ( IBM )</p>},
  {label:'Sistemi Operativi', description:<p>Windowx, Linux, WSL</p>},
  {label:'Utility', description:<p>WSL, Typora ( Markdown ), Keepass ( Password Store ), Ditto ( Store Copied Content ), BeefText ( Text Shortcut ), Notepad++, Atom</p>}
];

const Skill:React.FC<SkillProps> = () =>
  <Card border={'warning'} className={`text-center ${commonStyle.darkBackground}`} id={'Education'}>
    <Card.Header className={'text-white'}>
      <h1>
        <b> Competenze tecniche  </b>
      </h1>
    </Card.Header>
    <Card.Body>
      { skill.map( e => ( <DescriptionRow label={e.label}  translate={false} description={e.description}/> ))}
    </Card.Body>
  </Card>;

export default Skill;