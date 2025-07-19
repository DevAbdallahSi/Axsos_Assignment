import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Nav from './components/SideNav'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header /><Nav />

        </>
    )
}

export default App
