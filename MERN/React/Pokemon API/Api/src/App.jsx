import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/ApiCompo'
import PokeList from './components/poky'

function App() {

  return (
    <>
      {/* <UserList/> */}
      <PokeList/>
    </>
  )
}

export default App
