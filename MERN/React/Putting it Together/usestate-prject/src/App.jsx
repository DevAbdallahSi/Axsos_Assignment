import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IncreaseAge from './components/useState'
import MyNewComponent from './components/MyNewComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <IncreaseAge firstName="Abdallah" lastName="Salhi" age={25} hairColor="black"/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      {/* // <MyNewComponent>
      //   <h1>elll</h1>
      //   <h1>asc</h1>
      //   <h1>sdqw</h1>
      //   <h1>azcas</h1>
      //   <h1>asm</h1>
      //   <h1>;sad</h1>
      // </MyNewComponent> */}
    </>
  )
}

export default App
