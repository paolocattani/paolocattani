import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import Link from './core/Link';
import {useTranslation} from "react-i18next";
// Immagine profilo
import profile_image from '../images/profile-image.jpeg';
import { EnvelopeIcon, LinkedinIcon, FacebookIcon, GithubIcon } from './core/Icons';

import { slide as Menu } from 'react-burger-menu'

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
var styles = {
  bmBurgerButton: {
    color: '#ff8400',
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [t] = useTranslation('common');

  return (
    <Menu  width={ 280 } isOpen={ false } noOverlay styles={ styles }>
      <Image src={profile_image} thumbnail />
      <h2 ><i><b> Paolo Cattani </b></i></h2>
      <h5 ><i>paolocattani0501@gmail.com</i></h5>
      { sections.map(s => <Link link={s.link}> {t(s.label)}</Link>)}
      { links.map(l => <Link key={l.key} link={l.link}>{l.icon}</Link> )}
    </Menu>
  );
};

export default Sidebar;

