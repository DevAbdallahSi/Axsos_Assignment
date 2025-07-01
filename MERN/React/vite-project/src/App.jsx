import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PersonCard firstName="jary" lastName="basheer" age={25} hairColor="red" />
        {/* <PersonCard firstName="abood" lastName="salhi" age={25} hairColor="black" />
        <PersonCard firstName="mahmoud" lastName="atoot" age={25} hairColor="orange" /> */}
      </div>
    </>
  )
}

export default App
