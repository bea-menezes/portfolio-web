// import Flor1 from '../../assets/img/flor-1.png'
import Flor1 from '../../assets/img/flor-animate-1.svg'
import Flor2 from '../../assets/img/flor-2.png'


import './Home.css'

function Home() {
    return (
        <>
            <section  id='home'>
                <div className='container-home-img'>
                    <img id='flor-1' src={Flor1} alt="Flor svg" />
                </div>

                <div className='container-home-content'>
                    <h1>BEM-VINDOS, MEU NOME É BEATRIZ</h1>
                    <h2>Sou desenvolvedora Front-End</h2>

                    <span className='barrinha-colorida'></span>

                    <div className='container-home-links'>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>

                    <img id='flor-2' src={Flor2} alt="Flor" />
                </div>
            </section>
        </>
    )
}

export default Home