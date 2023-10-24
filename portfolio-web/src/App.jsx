// import { useState } from 'react'

import './App.css'
import HeaderMenu from './components/Menu/HeaderMenu'
import Home from './pages/Home/Home'
// import OqueFaco from './pages/OqueFaco/OqueFaco'
import QuemSou from './pages/QuemSou/QuemSou'

function App() {

  return (
    <>
      <HeaderMenu/>
      <Home/>
      <QuemSou/>
      {/* <OqueFaco/> */}
    </>
  )
}

export default App
