import './App.css'
import PersonCard from './components/PersonCard'
function App() {

  return (
    <>
      <div>
      <PersonCard firstName="jary" lastName="basheer" age={25} hairColor="red" />
        <PersonCard firstName="abood" lastName="salhi" age={25} hairColor="black" />
        <PersonCard firstName="mahmoud" lastName="atoot" age={25} hairColor="orange" />
      </div>
    </>
  )
}

export default App
