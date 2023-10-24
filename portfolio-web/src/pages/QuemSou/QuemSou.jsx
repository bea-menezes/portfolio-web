import './QuemSou.css'

import Bea from '../../assets/img/bea.png'
// import Flor2 from '../../assets/img/flor-animate-2.svg'
// import Flor2 from '../../assets/img/flor-2.png'

function QuemSou() {
    return (
        <>
            <section className="container-quem-sou">
                <div className="container-quem-sou-content">
                    <h2>Olá,</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ratione sed? Dolores, veritatis. Quos voluptates officiis illum quibusdam consequuntur tempora nesciunt non laboriosam adipisci nostrum facilis voluptas aliquam, nulla optio?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ratione sed? Dolores, veritatis. Quos voluptates officiis illum quibusdam consequuntur tempora nesciunt non laboriosam adipisci nostrum facilis voluptas aliquam, nulla optio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

                        <span className='barrinha-colorida'></span>
                    </div>
                    <button>Currículo</button>
                </div>
                <div className="container-quem-sou-imgs">
                    <img id='bea' src={Bea} alt="Bea" />
                    {/* <img id='flor' src={Flor2} alt="Flor 2" /> */}
                </div>
            </section>
        </>
    )
}

export default QuemSou