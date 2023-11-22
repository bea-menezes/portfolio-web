import './HeaderMenu.css'

function HeaderMenu(){
    return(
        <>
            <header className="header">
                <a id='title-bea' href="#">Bea.</a>
                <nav className="nav">
                    <ul className="menu">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PERFIL</a></li>
                        <li><a href="#">PROJETOS</a></li>
                        <li><a href="#">CONTATO</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderMenu