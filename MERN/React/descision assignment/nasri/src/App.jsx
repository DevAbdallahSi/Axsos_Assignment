import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponents from './components/signin'
import DisplayUsers from './components/HomeComponents'

function App() {
  const [users, setUsers] = useState([]); 

const addUser = (user) => {
    setUsers([...users, user]); 
};

  return (
    <>
    <FormComponents onNewUser = {addUser} />
    <DisplayUsers users={users}/>
    </>
  )
}

export default App;
