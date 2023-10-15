import Flor1 from '../assets/img/flor-1.png'
import Flor2 from '../assets/img/flor-2.png'
import Bea from '../assets/img/bea.png'

import '../styles/MainContent.css'

function MainContent() {

  return (
    <>
      <main>
        <section id='home'>
          <div className="container-home-left">
            <img id='flor-1' src={Flor1} alt="flor" />
          </div>

          <div className="container-home-mid">
            <div className='container-home-mid-title'>
              <h1>BEM-VINDOS, MEU NOME É BEATRIZ</h1>
              <h2>Sou desenvolvedora Front-End </h2>
            </div>
            <span className='barrinha-colorida'></span>
            <div className='container-home-mid-a'>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>

          <div className="container-home-rigth">
            <div>
              <img id='bea' src={Bea} alt="bea" />
              <img id='flor-direita' src={Flor2} alt="flor" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default MainContent