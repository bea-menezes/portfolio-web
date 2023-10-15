import '../styles/HeaderMenu.css'

function HeaderMenu(){
    return(
        <>
            <header className="header">
                <a id='title-bea' href="#">Bea.</a>
                <nav className="nav">
                    <ul className="menu">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#">QUEM SOU</a></li>
                        <li><a href="#">O QUE FAÇO</a></li>
                        <li><a href="#">PROJETOS</a></li>
                        <li><a href="#">CONTATO</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderMenu