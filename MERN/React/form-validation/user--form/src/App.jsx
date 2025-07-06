import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserForm from './components/userform'
import MessageForm from './components/MessageForm'
import MessageDisplay from './components/MessageDisplay'

function App() {
const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( newMessage );
    }
    
    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentMsg } />
        </>
    );
}

export default App;
