import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import Link from './core/Link';
import {useTranslation} from "react-i18next";
// Immagine profilo
import profile_image from '../images/profile-image.jpeg';
import { EnvelopeIcon, LinkedinIcon, FacebookIcon, GithubIcon } from './core/Icons';

// Style
import sidebarStyle from '../style/sidebar.module.scss';

// Interface
interface SidebarProps {}

const sections = [
  { link :'#Home',label:'sidebar.home', key:'key_Home'},
  { link :'#Experience',label:'sidebar.experience',key:'key_Experience' },
  { link :'#Education',label:'sidebar.education',key:'key_Education' },
  { link :'#Skill',label:'sidebar.skill',key:'key_Skill' },
  { link :'#Portfolio',label:'sidebar.portfolio',key:'key_Portfolio' },
  { link :'#Contacts',label:'sidebar.contacts',key:'key_Contacts' }
]

const links = [
  { link:'https://www.facebook.com/paolo.cattani.9',icon:<FacebookIcon />,key:'key_Facebook'},
  { link:'https://github.com/paolocattani',icon:<GithubIcon />,key:'key_Github'},
  { link:'https://www.linkedin.com/in/paolo-cattani-5913a5127/',icon:<LinkedinIcon />,key:'key_Linkedin'},
  { link:'mailto:paolocattani0501@gmail.com',icon:<EnvelopeIcon />,key:'key_Mail'}

]

const Sidebar: React.FC<SidebarProps> = () => {
  const [t] = useTranslation('common');

  return (
    <div className={sidebarStyle.container}>
      {/* Image */}
      <Image src={profile_image} thumbnail />

      {/* Name */}
      <h2 ><i><b> Paolo Cattani </b></i></h2>

      {/* List */}
      <ListGroup className={sidebarStyle.sectionList} variant="flush">
        { sections.map(s => <ListGroup.Item key={s.key}><Link link={s.link}> {t(s.label)}</Link></ListGroup.Item> )}
      </ListGroup>

      {/* External Link */}
      <div className={sidebarStyle.linkList}>
        {links.map(l => <Link key={l.key} link={l.link}>{l.icon}</Link> )}
      </div>
    </div>
  );
};

export default Sidebar;

