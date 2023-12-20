import { useState } from 'react'

import './HeaderMenu.css'

function HeaderMenu(){

    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
  }

    return(
        <>
            <header className="header">
                <a id='title-bea' href="#">Bea.</a>
                <nav className="nav">
                    <ul className="menu">
                        <li><a href="#home" onClick={() => onUpdateActiveLink('home')}>HOME</a></li>
                        <li><a href="#perfil" onClick={() => onUpdateActiveLink('perfil')}>PERFIL</a></li>
                        <li><a href="#projetos" onClick={() => onUpdateActiveLink('projetos')}>PROJETOS</a></li>
                        <li><a href="#contato" onClick={() => onUpdateActiveLink('contato')}>CONTATO</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderMenu