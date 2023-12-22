// import { useState } from 'react'

import ImgDetails from './assets/img/imgDetails.png'

import './App.css'
import HeaderMenu from './components/Menu/HeaderMenu'
import Rodape from './components/Rodape/Rodape'
import Contato from './pages/Contato/Contato'
import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'
import Projetos from './pages/Projetos/Projetos'


function App() {

  return (
    <>
      <HeaderMenu/>
      <Home/>
      {/* <div className='img-details'><img src={ImgDetails} alt="img" /></div> */}
      <Perfil/>
      <Projetos/>
      <Contato/>
      <Rodape/>
    </>
  )
}

export default App
