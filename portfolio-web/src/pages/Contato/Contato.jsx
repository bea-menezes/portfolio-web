import btnTel from '../../assets/icon/iconTel.png'
import btnEmail from '../../assets/icon/iconEmail.png'
import btnEnviar from '../../assets/icon/icon_enviar.png'

import './Contato.css'

function Contato() {
    return (
        <>
            <section id='contato' className='container-contato'>
                <div className='contato-left'>
                    <h2>Contato</h2>
                    <div className='icons'>
                        <img src={btnTel} alt="telefone" />
                        <img src={btnEmail} alt="email" />
                    </div>

                    <div className='text-telefone'>
                        <h2>Telefone</h2>
                        <span>(92) 9 9999-9999</span>
                    </div>

                    <div className='text-email'>
                        <h2>E-mail</h2>
                        <span>beatrizprs.menezes@gmail.com</span>
                    </div>
                </div>

                <div className='contato-right'>

                    <h2>Formulário</h2>
                    <p>
                        Em caso de alguma dúvida, preencha os campos abaixo
                        e clique em enviar.
                    </p>

                    <form action="">
                        <div className='textfield-form'>
                            <label htmlFor="">Seu nome</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='textfield-form'>
                            <label htmlFor="">Seu email</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='textfield-form'>
                            <label htmlFor="">Seu telefone</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='textfield-form'>
                            <label htmlFor="">Assunto</label>
                            <textarea cols="10" rows="5"></textarea>
                        </div>
                    </form>

                    <button>Enviar <img src={btnEnviar} alt="icon_enviar" /></button>

                </div>
            </section>
        </>
    )
}

export default Contato