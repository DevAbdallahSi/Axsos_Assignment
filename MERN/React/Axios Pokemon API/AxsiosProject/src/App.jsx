import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/test'

function App() {

const movieList = [
  { title: "Inception", year: 2010 },
  { title: "Matrix", year: 1999 },
  { title: "Interstellar", year: 2014 }
];
  return (
    <>
      <MyComponent movies={movieList} />
    </>
  )
}

export default App
