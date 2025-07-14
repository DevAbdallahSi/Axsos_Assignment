import { useState } from 'react'
import FormData from './components/FormComponent'
import ProductList from './components/HomeComponent'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Details from './components/Display';
function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<><FormData /> <ProductList /></>}  />
                <Route path='/product/:id' element={<Details />} />
            </Routes>
        </>
    )
}

export default App;
