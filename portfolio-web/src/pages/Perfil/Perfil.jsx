import './Perfil.css'

import Bea from '../../assets/img/bea.png'
import Computer from '../../assets/img/Computer.png'

import Figma from '../../assets/icon/figma.png'
import HTML5 from '../../assets/icon/html.png'
import CSS3 from '../../assets/icon/css.png'
import Js from '../../assets/icon/javascript.png'
import Reactjs from '../../assets/icon/react.png'
import Nodejs from '../../assets/icon/node.png'
import MYSQL from '../../assets/icon/mysql.png'
import C from '../../assets/icon/c.png'



function Perfil() {
    return (
        <>
            <section id="Perfil">
                <div className="container-perfil">
                    <div className='container-perfil-itens'>
                        <div className='container-perfil-content'>
                            <h2 className='titulos'>Olá,</h2>
                            <p className='paragrafos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde pariatur dolorum laboriosam aliquam tenetur minima vel odit delectus fugiat! Excepturi labore cupiditate ad, numquam accusamus dignissimos perspiciatis assumenda consequuntur?</p>
                        </div>
                        <img id='bea-img' src={Bea} alt="Bea" />
                    </div>
                    <span id='barra'></span>
                </div>

                <div className='container-o-que-faco'>
                    <div className='container-o-que-faco-content'>
                        <h2 className='titulos'>Interface de Web Sites</h2>
                        <p className='paragrafos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde pariatur dolorum laboriosam aliquam tenetur minima vel odit delectus fugiat! Excepturi labore cupiditate ad, numquam accusamus dignissimos perspiciatis assumenda consequuntur?</p>
                    </div>
                    <img id='bea-img' src={Computer} alt="Computador" />
                </div>

                <div>
                    <div className='container-habilidades'>
                        <h2 className='titulos'>Habilidades</h2>
                        <div className='container-habilidades-itens'>
                            <img src={Figma} alt="Figma" />
                            <img src={HTML5} alt="html5" />
                            <img src={CSS3} alt="css3" />
                            <img src={Js} alt="js"/>
                            <img src={Reactjs} alt="ractjs" />
                            <img src={MYSQL} alt="mysql" />
                            <img src={Nodejs} alt="Node js" />
                            <img src={C} alt="C" />

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Perfil