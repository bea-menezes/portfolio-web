
import './HeaderMenu.css'

function HeaderMenu(){

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
  }

    return(
        <>
            <header className="header" >
                <a id='title-bea' href="#home">Bea.</a>
                <nav>
                    <ul>
                        <li><a href="#home" className='navbar-link' onClick={() => onUpdateActiveLink('home')}>HOME</a></li>
                        <li><a href="#perfil" className='navbar-link' onClick={() => onUpdateActiveLink('perfil')}>PERFIL</a></li>
                        <li><a href="#projetos" className='navbar-link' onClick={() => onUpdateActiveLink('projetos')}>PROJETOS</a></li>
                        <li><a href="#contato" className='navbar-link' onClick={() => onUpdateActiveLink('contato')}>CONTATO</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderMenu