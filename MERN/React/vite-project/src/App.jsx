import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello dojo</h1>
      <h3>thinhs i need to do</h3>
      <ul>
      <li>learn React</li>
      <li> climb Mt everest</li>
      <li>Run A Marathon </li>
      <li> Feed The dogs</li>
      </ul>
      <div>
      <PersonCard firstName="jary" lastName="basheer" age={25} hairColor="red" />
        <PersonCard firstName="abood" lastName="salhi" age={25} hairColor="black" />
        <PersonCard firstName="mahmoud" lastName="atoot" age={25} hairColor="orange" />
      </div>
    </>
  )
}

export default App
