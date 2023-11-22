// import { useState } from 'react'

import './App.css'
import HeaderMenu from './components/Menu/HeaderMenu'
import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'
import Projetos from './pages/Projetos/Projetos'


function App() {

  return (
    <>
      <HeaderMenu/>
      <Home/>
      <Perfil/>
      <Projetos/>
    </>
  )
}

export default App
